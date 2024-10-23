const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
