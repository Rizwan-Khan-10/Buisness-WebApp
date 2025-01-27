import express from 'express'
// import handleEmployeeData from '../controllers/employee.controller.js'
// import handleStoreData from '../controllers/store.controller.js'
import { generateOtp } from '../utils/generateOtp.js';
import { verifyOtp } from '../utils/validateOtp.js'

const router = express.Router();

router.post('/getotp', (req, res) => {
    const { email } = req.body;
    const result = generateOtp(email);
    res.json(result);
})

router.post('/verifyotp', (req, res) => {
    const { email, otp } = req.body;
    const result = verifyOtp(email, otp);
    res.json(result);
})

router.post('/store', (req, res) => {
    const storeData = req.body;
    const result = handleStoreData(storeData);
    res.json(result);
})

router.post('/admin', (req, res) => {
    const adminData = req.body;
    const result = handleEmployeeData(adminData);
    res.json(result);
})

export default router;