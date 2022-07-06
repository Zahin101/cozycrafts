const app = require("./app");

const dotenv = require("dotenv");
// const { path } = require("./app");
const connectDatabase = require("./config/database")


//Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
})



//config

dotenv.config({path:"backend/config/config.env"});

//connect database
connectDatabase()

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})




//unhandeled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandeled Promise rejection`);

    server.close(()=>{
        process.exit(1);
    })

});