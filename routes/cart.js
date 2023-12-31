const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const UserModel = require('../models/User');
const ProductModel = require('../models/product');

router.get('/cart', async (req, res)=>{
    const userEmail = req.session.user.email
    const user = await UserModel.findOne({email: userEmail});
    res.render('Pages/cart', {
        pageTitle: 'cart',
        products: user.cart.items,
    })
})


router.post('/cart', async (req, res)=>{
    const product = await ProductModel.findById(new mongoose.Types.ObjectId(req.body.id));
    const userEmail = req.session.user.email
    const user = await UserModel.findOne({email: userEmail})
    const item = {"title": product.title, "price": product.price};
    user.cart.items.push(item);
    user.save();
    res.redirect('/cart')
})

router.get('/cart/:title', async (req, res)=>{
    const userEmail = req.session.user.email
    const user = await UserModel.findOne({email: userEmail})
    user.cart.items.pop(req.params);
    user.save();
    res.redirect('/cart')
});

module.exports = router;


