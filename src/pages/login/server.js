const express = require('express');
const twilio = require('twilio');
const app = express();
const port = 3002;

const accountSid = "AC67fc1e7fa5bd0b3904023d914937a044";
const authToken = "074497fb12165de80a86bb2900eb4bbb";
const verifySid = "VA59d6d0197c9cd5520335e61624d755ad";
const twilioClient = twilio(accountSid, authToken);

app.use(express.json());

app.post('/generate-otp', (req, res) => {
  const phoneNumber = '+917010340865'; // Replace with the actual phone number

  twilioClient.verify.v2.services(verifySid) // Use v2.services
    .verifications.create({ to: phoneNumber, channel: 'sms' })
    .then((verification) => {
      const otp = verification.sid; // Assuming the OTP is in the verification SID
      console.log(verification.status);
      res.json({ otp, message: 'OTP sent successfully' });
    })
    .catch((error) => {
      console.error("Twilio Error:", error);
      res.status(500).json({ error: 'Failed to generate OTP' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
