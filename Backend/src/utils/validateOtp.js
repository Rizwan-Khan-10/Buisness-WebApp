import { validOtp } from './generateOtp';

function verifyOtp(email, otp) {
    const otpData = validOtp.find(otpData => otpData.email === email && otpData.otp === otp);

    if (otpData) {
        return { status: "success", message: "OTP verified successfully!" };
    } else {
        return { status: "error", message: "Invalid OTP or email!" };
    }
}

export { verifyOtp };
