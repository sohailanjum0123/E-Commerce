const app = require("./app");
const connectDatabase = require("./database");

process.on("uncaughtException", err =>{
    console.log(`Errr: ${err.message}`);
    console.log("Shutting down the server due to uncaught exception err");
    process.exit(1);
})

connectDatabase();


 const server = app.listen(process.env.PORT,()=>{
    console.log("Server is working on http://localhost:" + process.env.PORT);
})

