const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
    },
});

app.post('/send-email', (req, res) => {
    const { firstName, lastName, email, phone, checkIn, checkOut, roomType } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Hotel Registration Confirmation',
        text: `Hello ${firstName} ${lastName},
        
Thank you for registering. Here are your details:
- Email: ${email}
- Phone: ${phone}
- Check-in: ${checkIn}
- Check-out: ${checkOut}
- Room Type: ${roomType}

Looking forward to hosting you!

Best Regards,
Hotel Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.json({ success: false, message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ success: true, message: 'Email sent successfully' });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
