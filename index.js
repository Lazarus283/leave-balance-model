require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./src/config/db'); // Adjust path if needed

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware (optional)
app.use(express.json());

// Connect to MongoDB and start server
connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
