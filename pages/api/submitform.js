// pages/api/submit-form.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
   if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    // Validate the form data (add more validation as needed)

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nsriramya7@gmail.com',
        pass: 'kbqd aglr fqdx sedg',
      },
    });

    // Define your email sending function
    const sendEmail = () => {
      const mailOptions = {
        from: email,
        to: 'nsriramya7@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({ success: true, message: 'Email sent successfully!' });
        }
      });
    };

    // Send email
    sendEmail();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
