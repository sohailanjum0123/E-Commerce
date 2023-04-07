const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorHandler");
const catchAsyncError   =  require("../middleware/catchAsyncError");



exports.createProduct = catchAsyncError (async(req,res,next) =>{

    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
});

exports.getAllProducts = catchAsyncError (async (req,res,next) =>{

    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
})

exports.updateProduct = catchAsyncError(async (req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return next( new ErrorHander("product not found",404))
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
})


exports.deleteProduct = catchAsyncError (async(req,res,next) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next( new ErrorHander("product not found",404))
    }

       
    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"product deleted Successfully"
    })
})

exports.getProductDetail = catchAsyncError(async (req,res,next)=>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return next( new ErrorHander("product not found",404))
    }

    res.status(200).json({
        success:true,
        product,
    })

})