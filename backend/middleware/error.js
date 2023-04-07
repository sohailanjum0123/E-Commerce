const ErrorHandler = require("../utils/errorHandler");

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500 ;
    err.message = err.message || "Internal server Error";

    // Cast or Invalid ID error
    if(err.message==="CastError"){
        const message = `Resource not found. Invalid ID ${err.path}`;
        err = new ErrorHandler(message,400)
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}