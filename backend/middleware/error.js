const ErrorHandler = require("../utils/errorHander");

module.exports = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal server Error"

    res.statusCode(err.statusCode).json({
        success:false,
        message:err.message
    })
}