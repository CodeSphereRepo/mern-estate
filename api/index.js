import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import User from './models/user.model.js';
import router from "./routes/userRoute.js"
dotenv.config({ path: 'dotenv.env' }); // Load environment variables from dotenv.env file

const app = express();
const port = 5000;

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI; // Using environment variable

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Middleware to parse JSON
app.use(express.json());


// Define routes here
app.get('/test', (req, res) => {
  res.json ({message:"Hello Message"})
});

app.use("/api/user", router)

app.listen(port, () => {
  console.log(`Server is Running at ${port}`);
});
