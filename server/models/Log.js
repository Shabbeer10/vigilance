import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
    timestamp: {type: Date, defualt: Date.now},
    source: {type: String, required: true},
    level: {type: String, required: true},
    message: { type: String, required: true},
    details: { type: mongoose.Schema.Types.Mixed},
});

export default mongoose.model("Log", LogSchema);