const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDbStore = require('connect-mongodb-session')(session)
//const { MONGO_URI } = require('./db/database');
const csrf = require('csurf');
const port=process.env.PORT||5500;

// importing routes
const home = require('./routes/landing');
const addProduct = require('./routes/addProduct');
const categoryPage = require('./routes/category');
const cart = require('./routes/cart');
const login = require('./routes/login');
const signup = require('./routes/signup');
const logout = require('./routes/logout');
const blog = require('./routes/blog');
const checkout = require('./routes/checkout');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')
//creating a session storage in database
const store = new MongoDbStore({
    uri: "paste your mongodb link here ",
    collection: 'sessions'
})

app.use(express.urlencoded({extended: false}))
//serving static files like css
app.use(express.static(path.join(__dirname, 'public')))
// session middleware
app.use(session({ 
    secret: 'mysecret', 
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        httpOnly: true,
        maxAge: 3600000
    }
}))
// csrf middleware
app.use(csrf());
app.use((req, res, next) => {
    res.locals.Authenticated = req.session.isLoggedin;
    res.locals.csrfToken = req.csrfToken();
    next();
})

app.use(home);
app.use(login);
app.use(signup);
app.use(categoryPage);
app.use(blog);
//logout on session expire
app.use((req, res, next)=> {
    if(!req.session.isLoggedin){
        return res.redirect('/login')
    }
    next();
});
app.use(addProduct);
app.use(cart);
app.use(logout);
// 404
app.use((req, res) => {
    res.send("Page Not Found")
})

//connecting database


mongoose.connect("paste you mongo db link here",{
    useNewUrlParser : true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
})
.then(()=>{
    console.log('connected to the database');
}).catch((e)=>{
    console.log('no connection');
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})