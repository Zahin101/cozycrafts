const express = require("express");
const app = express();
const errorMiddleWare = require("./middleware/error");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

//config

dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(cookieParser());

//Route
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

//MiddleWare For Errors

app.use(errorMiddleWare);

module.exports = app;
