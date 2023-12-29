const Product = require('../models/product');
const Order = require('../models/order');
const router = require('./landing');
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.getCheckout = (req, res, next) => {
    req.user
      .populate('cart.items.productId')
      .execPopulate()
      .then(user => {
        const products = user.cart.items;
        let total = 0;
        products.forEach(p => {
          total += p.quantity * p.productId.price; 
        });
        res.render('shop/checkout', {
          path: '/checkout',
          pageTitle: 'Checkout',
          products: products,
          totalSum: total
        });
      })
      .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
  }
  
  router.postOrder = (req, res, next) => {
    const token = req.body.stripeToken; // Using Express
    let totalSum = 0;
  
    req.user
      .populate('cart.items.productId')
      .execPopulate()
      .then(user => {  
        user.cart.items.forEach(p => {
          totalSum += p.quantity * p.productId.price;
        });
  
        const products = user.cart.items.map(i => {
          return { quantity: i.quantity, product: { ...i.productId._doc } };
        });
        const order = new Order({
          user: {
            email: req.user.email,
            userId: req.user
          },
          products: products
        });
        return order.save();
      })
      .then(result => {
        const charge = stripe.charges.create({
          amount: totalSum * 100,
          currency: 'usd',
          description: 'Demo Order',
          source: token,
          metadata: { order_id: result._id.toString() }
        });
        return req.user.clearCart();
      })
      .then(() => {
        res.redirect('/orders');
      })
      .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
  };
  