const registerBtn = document.getElementById("register-btn");
const registerForm = document.getElementById("registration-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const otpInput = document.getElementById("otp-input");
const getOtp = document.getElementById("get-otp");
const verifyOtp = document.getElementById("verify-otp");
const resendOtp = document.getElementById("resend-otp");
const resendOtpTimer = document.getElementById("resend-timer");
const otpVerified = document.getElementById("otp-verified");

function validateAndGetFormData(formElement, requiredFieldsSelector) {
    const requiredFields = formElement.querySelectorAll(requiredFieldsSelector);
    let isValid = true;
    const emptyFields = [];
    const formData = {};
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            emptyFields.push(field.placeholder || field.name || 'Unnamed Field');
        } else {
            field.classList.remove('error');
        }
    });
    if (!isValid) {
        alert(`Please fill in the following required fields:\n- ${emptyFields.join('\n- ')}`);
        return null;
    }
    const inputs = formElement.querySelectorAll('input, select, textarea');
    inputs.forEach(field => {
        if (field.name) {
            formData[field.name] = field.value.trim() || 'Not Available';
        }
    });
    return formData;
}

registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = validateAndGetFormData(registerForm, '[required]');
    if (password.value !== confirmPassword.value) {
        alert('Password not matched');
        return;
    }
    if (formData) {

    }
});

getOtp.addEventListener('click', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("admin-email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput)) {
        alert('Please enter a valid email address.');
        return;
    }
    getOtp.classList.add("hidden");
    resendOtp.classList.remove("hidden");
    resendOtp.classList.add("flex");
    let otpTimer = Number(resendOtpTimer.innerText);
    const otpInterval = setInterval(() => {
        otpTimer--;
        resendOtpTimer.innerText = otpTimer;
        if (otpTimer === 0) {
            getOtp.innerText = "Resend Otp";
            getOtp.classList.remove("hidden");
            resendOtpTimer.innerText = 30;
            resendOtp.classList.remove("flex");
            resendOtp.classList.add("hidden");
            clearInterval(otpInterval);
        }
    }, 1000);
    try {
        const response = await fetch("http://localhost:3000/register/getotp", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        if (!response.ok) {
            throw new Error('Failed to fetch OTP. Please try again.');
        }
        const data = await response.json();
        if (data.success) {
            alert(`OTP sent successfully to ${email}`);
        } else {
            alert(data.message || 'Failed to send OTP. Please check the email address.');
        }
    } catch (error) {
        console.error('Error fetching OTP:', error);
        alert('An error occurred while fetching OTP. Please try again later.');
    }
});

verifyOtp.addEventListener('click', async (e) => {
    e.preventDefault();
    const otpValue = otpInput.value.trim();
    if (!otpValue) {
        alert("Please enter the OTP.");
        return;
    }
    try {
        const response = await fetch("http://localhost:3000/register/verifyOtp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ otp: otpValue }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(`OTP Verification Successful: ${data.message}`);
            otpVerified.classList.remove("hidden");
            otpInput.required = false;
            otpInput.readonly = true;
            email.required = false;
            otpInput.readonly = true;
        } else {
            const errorData = await response.json();
            alert(`OTP Verification Failed: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
        alert("An error occurred while verifying OTP. Please try again.");
    }
});