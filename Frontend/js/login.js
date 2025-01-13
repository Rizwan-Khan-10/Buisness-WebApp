const otpForm = document.getElementById("otp-form");
const resetPasswordForm = document.getElementById("reset-password-form");
const forgotPasswordLink = document.getElementById("forgot-password");
const loginForm = document.getElementById("login-form");

forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("hidden");
    otpForm.classList.remove("hidden");
});

otpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    otpForm.classList.add("hidden");
    resetPasswordForm.classList.remove("hidden");
});

resetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Password reset successfully! Redirecting to login...");
    resetPasswordForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

let cancelLogin = document.querySelectorAll('.cancel-login');
cancelLogin.forEach((e) => {
    e.addEventListener('click', () => {
        if (!otpForm.classList.contains('hidden') || !resetPasswordForm.classList.contains('hidden')) {
            otpForm.classList.add('hidden');
            resetPasswordForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        }
    });
});