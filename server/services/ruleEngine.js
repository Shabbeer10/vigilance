import Alert from '../models/Alert.js';

export async function processLog(log) {
    if (log.level.toLowerCase() === 'error' && log.message.toLowerCase().includes('failed login')) {
        const alert = new Alert({
            rule: 'Failed Login Detected',
            description: 'An error log indicated a failed login attempt.',
            log: log._id,
        });
        await alert.save();
        console.log('Alert generated:', alert);
    }
}