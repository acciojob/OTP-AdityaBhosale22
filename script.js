const otpInputs = document.querySelectorAll('.code');
const submitBtn = document.getElementById('submit-btn');

otpInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        // Move to the next input when a digit is entered
        if (input.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (event) => {
        // Move to the previous input when backspace is pressed
        if (event.key === 'Backspace' && index > 0 && input.value.length === 0) {
            otpInputs[index - 1].focus();
        }
    });
});

submitBtn.addEventListener('click', () => {
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    alert(`OTP Submitted: ${otp}`);
});