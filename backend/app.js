const express = require("express");
const app = express();
const errorMiddleWare = require("./middleware/error");

app.use(express.json());

//Route
const product = require("./routes/productRoute");

app.use("/api/v1", product);

//MiddleWare For Errors

app.use(errorMiddleWare);


module.exports = app;