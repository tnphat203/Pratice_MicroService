const mongoose = require("mongoose");

// Hàm kết nối MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Thoát nếu kết nối thất bại
  }
};

module.exports = connectDB;
