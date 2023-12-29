const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
        res.render('home', {
            products: 'abc',
            pageTitle: 'Bought',
        })
    }
)

module.exports = router;