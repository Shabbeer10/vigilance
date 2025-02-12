import express from 'express';
import Log from '../models/Log.js';
import Alert from '../models/Alert.js';

const router = express.Router();

// Retrieve all logs
router.get('/logs', async (req,res) => {
    try {
        const logs = await Log.find().sort({timestamp: -1});
        res.json(logs);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// retrieve all alerts
router.get('/alerts', async (req,res) => {
    try {
        const alerts = await Alert.find().populate('log').sort({timestamp: -1});
        res.json(alerts);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

export default router;