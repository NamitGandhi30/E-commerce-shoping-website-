const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: true
    },
     userId: {                                      //was commented
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         require:true
     },

     Product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'prodect',
     }
})

module.exports = mongoose.model('Product', productSchema)


