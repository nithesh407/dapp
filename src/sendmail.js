const nodemailer = require('nodemailer');


async function sendEmail() {
  try {
    // Create a transporter object using your Gmail account and App Password
    const transporter = nodemailer.createTransport({
        service: 'smtp.gmail.com',
        auth: {
          user: 'nitheshravikumar13631@gmail.com',   // Your Gmail address
          pass: 'yjeorttflhlbeerp',                  // The App Password you generated
        }
    })

    // Define the email data
    const mailOptions = {
      from: 'your@gmail.com',              // Sender's email address
      to: 'recipient@example.com',         // Recipient's email address
      subject: 'Hello from Nodemailer',
      text: 'This is a test email sent using Nodemailer.'
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

