import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//loading environment variables
dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.json());

// Connect to mongoDB
mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('MongoDB is connected'))
    .catch((err) => console.log(err));

// Routes
import logRoutes from './routes/logRoutes.js';
import apiRoutes from './routes/apiRoutes.js';

// use routes
app.use('/api', logRoutes);
app.use('/api', apiRoutes);

// basic root endpoint
app.get('/', (req,res) => {
    res.send("Welcome to My Basic SIEM")
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});