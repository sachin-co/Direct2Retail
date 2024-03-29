const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    days:{
        type:String,
        required: true,
    },
    image:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    pincode:{
        type:String,
        required:true,
    },
    latlng:{
        type:Array,
        required:false
    },
    availability:{
        type:Boolean,
        default:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetails',
        required: true,
    },
    
},{timestamps:true})


mongoose.models = {}

const Product = mongoose.model('Product Details', productSchema)

module.exports = Product;