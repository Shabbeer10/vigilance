import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//loading environment variables
dotenv.config('.env');
const uri = process.env.MONGO_URI;
const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.json());

// Connect to mongoDB
mongoose
    .connect(uri)
    .then(()=> console.log('MongoDB is connected'))
    .catch((err) => console.error('Error connecting to MongoDB',err));

// Routes
import logRoutes from './routes/logRoutes.js';
import apiRoutes from './routes/apiRoutes.js';

// use routes
app.use('/api', logRoutes);
app.use('/api', apiRoutes);

// basic root endpoint
app.get('/', (req,res) => {
    res.send("Welcome to Vigilance - A simple SIEM tool")
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});