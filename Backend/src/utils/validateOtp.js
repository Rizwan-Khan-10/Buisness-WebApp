import { validOtp } from './generateOtp.js';
import { ApiResponse } from './ApiResponse.js';
import { ApiError } from './ApiError.js';

function verifyOtp(email, otp) {
    try {
        const otpData = validOtp.find(
            (otpData) => otpData.email.trim() === email.trim() && otpData.otp === Number(otp.trim())
        );

        if (otpData) {
            const index = validOtp.findIndex(
                (data) => data.email.trim() === email.trim() && data.otp === Number(otp.trim())
            );
            if (index !== -1) {
                validOtp.splice(index, 1);
            }

            return new ApiResponse(200, "success", "OTP verified successfully!");
        } else {
            throw new ApiError(400, "Invalid OTP or email!");   
        }
    } catch (error) {
        if (error instanceof ApiError) {
            return error;
        }
        return new ApiError(500, "Internal Server Error", [], error.stack);
    }
}

export { verifyOtp };
