const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./database/connectDB"); // Import kết nối DB
const customerRoutes = require("./routers/Customer.router"); // Import routes
require("dotenv").config(); // Đọc file .env

const app = express();
const PORT = process.env.PORT || 2001;

// Middleware
app.use(bodyParser.json());

// Kết nối cơ sở dữ liệu
connectDB();

// Sử dụng routes
app.use("/api", customerRoutes);

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Customer Service is running on port ${PORT}`);
});
