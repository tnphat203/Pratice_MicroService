const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./database/connectDB");
const productRoutes = require("./src/routes/product.route"); // Import routes

const app = express();
const PORT = process.env.PORT || 8081;

require("dotenv").config();
// Middleware
app.use(bodyParser.json());

// Kết nối cơ sở dữ liệu
connectDB();

// Sử dụng routes
app.use("/api", productRoutes);

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});
