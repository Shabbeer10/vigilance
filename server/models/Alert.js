import mongoose from 'mongoose'; 
// timestamp rule description log

const AlertSchema = new mongoose.Schema({
    timestamp: {type: Date, default: Date.now},
    rule: {type: String, required: true},
    description: {type: String, required: true},
    log: {type: mongoose.Schema.Types.ObjectId, ref: 'Log'},
});

export default mongoose.model("Alert", AlertSchema);