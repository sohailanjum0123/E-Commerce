import app from "./app.js"
import connectDatabase from "./database.js";
import dotenv from "dotenv";

dotenv.config({path:"backend/config/config.env"});

app.get("/",()=>{
    console.log("Home");
})

connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log("Server is working on http://localhost:" + process.env.PORT);
})