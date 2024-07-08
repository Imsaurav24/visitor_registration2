function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const whomToMeet = document.getElementById('whomToMeet').value;
    const belongings = document.getElementById('belongings').value;
    const email = document.getElementById('email').value;
    const selfie = document.getElementById('selfie').files[0];

    // Here you would send the data to your backend server and generate/send OTP
    // Simulate OTP generation and sending for this example
    alert('OTP sent to ' + phone);
    
    // Show OTP input section
    document.getElementById('visitorForm').style.display = 'none';
    document.getElementById('otpSection').style.display = 'block';
}

function verifyOTP() {
    const otp = document.getElementById('otp').value;

    // Simulate OTP verification for this example
    if (otp === '123456') { // Replace with actual OTP verification logic
        document.getElementById('result').innerText = 'OTP verified successfully!';
        document.getElementById('otpSection').style.display = 'none';
    } else {
        alert('Invalid OTP. Please try again.');
    }
}
