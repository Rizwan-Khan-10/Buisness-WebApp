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
let enterEmail = false;

function splitFormData(formData) {
    const storeFields = ['GSTIN', 'storeName', 'storeAddress', 'storeContact', 'storeEmail', 'logo', 'currency'];
    const storeData = {};
    const otherData = {};
    Object.keys(formData).forEach(key => {
        if (key === 'OTP' || key === 'confirmPassword') {
            return;
        }
        if (storeFields.includes(key)) {
            storeData[key] = formData[key];
        } else {
            otherData[key] = formData[key];
        }
    });
    return { storeData, otherData };
}

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
            formData[field.name] = field.value.trim() || null;
        }
    });
    return splitFormData(formData);
}

registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = validateAndGetFormData(registerForm, '[required]');
    const storePhoneInput = document.getElementById("store-contact").value;
    const adminPhoneInput = document.getElementById("admin-contact").value;
    const phoneRegex = /^[0-9]{10}$/;
    if ((storePhoneInput || !phoneRegex.test(storePhoneInput)) && (!adminPhoneInput || !phoneRegex.test(adminPhoneInput))) {
        alert('Please enter a valid phone number.');
        return;
    }
    const emailInput = document.getElementById("store-email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput || !emailRegex.test(emailInput)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (password.value !== confirmPassword.value) {
        alert('Password not matched');
        return;
    }
    if (formData) {
        fetch('http://localhost:3000/register/store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData.storeData),
        });
        fetch('http://localhost:3000/register/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData.otherData),
        });
    }
});

getOtp.addEventListener('click', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("admin-email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput)) {
        alert('Please enter a valid email address.');
        enterEmail = false;
        return;
    }
    enterEmail = true;
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
            body: JSON.stringify({ email: emailInput }),
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
    if (!enterEmail) {
        alert("Please enter a valid email address and click on Get OTP.");
    } else {
        const emailInput = document.getElementById("admin-email").value;
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
                body: JSON.stringify({ email: emailInput, otp: otpValue }),
            });
            if (response.ok) {
                const data = await response.json();
                if (data.status === "success") {
                    alert(`${data.message}`);
                    otpVerified.classList.remove("hidden");
                } else {
                    alert("Enter correct OTP");
                    otpVerified.classList.add("hidden");
                }
            } else {
                const errorData = await response.json();
                alert(`OTP Verification Failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            alert("An error occurred while verifying OTP. Please try again.");
        }
    }
});
