import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config({ path: 'dotenv.env' }); // Load environment variables from dotenv.env file

const app = express();
const port = 5000;

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI; // Using environment variable

// Connect to MongoDB
mongoose.connect(mongoURI,)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Middleware to parse JSON
app.use(express.json());

// Define routes here

app.listen(port, () => {
  console.log(`Server is Running at ${port}`);
});
