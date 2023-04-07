const app = require("./app");
const connectDatabase = require("./database");

// Uncaught Error
process.on("uncaughtException", err =>{
    console.log(`Error: ${err.message}`);
    console.log("shutting down the server due to Uncaught Exception error");
    process.exit(1);
})

connectDatabase();


 const server = app.listen(process.env.PORT,()=>{
    console.log("Server is working on http://localhost:" + process.env.PORT);
})

//Unhandled Promise Exception
process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise rejection");
    server.close(()=>{
        process.exit(1)
    })
})