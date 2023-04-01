const express = require("express")
const app = express();
const dotenv = require("dotenv")

dotenv.config({path:"backend/config/config.env"});
app.use(express.json());

const products = require("./routes/productRoute.js")

app.use("/api/v1",products)

module.exports = app;