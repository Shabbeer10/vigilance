import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
    timestamp: {type: Date, defualt: Date.now},
})