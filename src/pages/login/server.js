const express = require('express');
const twilio = require('twilio');

const app = express();
const port = 3001; // You can choose any available port

// Twilio credentials
const accountSid = "AC67fc1e7fa5bd0b3904023d914937a044";
const authToken = "074497fb12165de80a86bb2900eb4bbb";
const verifySid = "VA59d6d0197c9cd5520335e61624d755ad";
const twilioClient = twilio(accountSid, authToken);

app.use(express.json());

// Endpoint for generating OTP
app.post('/generate-otp', (req, res) => {
  const  phoneNumber  = '+917010340865' 

  twilioClient.verify
    .services(verifySid)
    .verifications.create({ to: phoneNumber, channel: 'sms' })
    .then((verification) => {
      console.log(verification.status);
      res.json({ message: 'OTP sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate OTP' });
    });
});

// Endpoint for verifying OTP
app.post('/verify-otp', (req, res) => {
  const { phoneNumber, otpCode } = req.body;

  twilioClient.verify
    .services(verifySid)
    .verificationChecks.create({ to: phoneNumber, code: otpCode })
    .then((verification_check) => {
      console.log(verification_check.status);
      res.json({ message: 'OTP verification successful' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'OTP verification failed' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
