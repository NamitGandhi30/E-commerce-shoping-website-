const express = require('express');
const router = express.Router();

router.get("/blog",(req,res)=>{
    res.render("Pages/blog.ejs")
});
module.exports = router;