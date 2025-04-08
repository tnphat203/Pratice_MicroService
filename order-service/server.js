const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./database/db");
const orderRoutes = require("./routes/orderRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8082;

app.use(bodyParser.json());
connectDB();
app.use("/api", orderRoutes);

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});
