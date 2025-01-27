const validOtp = [];

function generateOtp(email) {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const existingIndex = validOtp.findIndex(otpData => otpData.email === email);
    if (existingIndex !== -1) {
        validOtp.splice(existingIndex, 1);
    }
    validOtp.push({ email, otp });
    setTimeout(() => {
        const index = validOtp.findIndex(otpData => otpData.email === email);
        if (index !== -1) {
            validOtp.splice(index, 1);
            console.log(`OTP expired for ${email}`);
        }
    }, 600000);
    return { status: "success", message: `OTP generated for ${email}: ${otp}` };
}

export { validOtp, generateOtp };
