const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter the product name"]
    },
    description:{
        type:String,
        required:[true, "Please Enter the product description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter the Product Price"],
        maxlength:[8,"Product Price cannot excead 8 character"]
    },
    stock:{
        type:Number,
        required:[true,"Please Enter the Product Stock"],
        default:1
    },
    rating:{
        type:Number,
        default:0
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        required:true
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            Comment:{
                type:String,
                required:true
            }
        }
    ],
    images:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

});
 module.exports = mongoose.model("Products", productSchema);