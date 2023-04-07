const express = require("express")
const app = express();
const dotenv = require("dotenv")

const errorMiddleware = require("./middleware/error")

dotenv.config({path:"backend/config/config.env"});
app.use(express.json());

const products = require("./routes/productRoute.js")

app.use("/api/v1",products)

//middleware
app.use(errorMiddleware);

module.exports = app;