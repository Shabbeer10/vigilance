
import express from 'express';
import Log from '../models/Log.js';
//import {processLog} from '../services/ruleEngine.js';

const router = express.Router();

//endpoint to ingest logs
router.post('/ingest', async (req,res) => {
    try {
        const logData = req.body;
        const log = new Log(logData);
        await log.save();

        // await processLog(log);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

export default router;