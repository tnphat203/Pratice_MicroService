const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./database/connectDB");
const orderRoutes = require("./routers/order.router"); // Import routes
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 2002;

app.use(bodyParser.json());
app.use("/api", orderRoutes);

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});
