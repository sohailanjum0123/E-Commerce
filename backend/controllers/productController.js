const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorHander");


exports.createProduct = async(req,res,next) =>{

    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
};

exports.getAllProducts = async (req,res,next) =>{

    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
}

exports.updateProduct = async (req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        req.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        success:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        message:"Product is Updated",
        product
    })
}


exports.deleteProduct = async(req,res,next) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    }

       
    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"product deleted Successfully"
    })
}

exports.getProductDetail =async (req,res,next)=>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return next( new ErrorHander("product not found",404))
    }

    res.status(200).json({
        success:true,
        product,
    })

}
