import { createTransport } from 'nodemailer';
import express from 'express';
import { urlencoded, json } from 'body-parser';


const app = express();
app.use(urlencoded({extended: false}));
app.use(json());

app.post('/send-email', (req, res) => {
    const { name, email, message} = req.body;

    //creating the transporter
    const transporter = createTransport({
        service: 'Gmail',
        auth: {
            user:'hloni.khoathane@gmail.com',
            pass: 'gmav lltg eaed ftwu'
        }
    });

    transporter.sendMail({
        from: 'hloni.khoathane@gmail.com',
        to: 'hloni.khoathane@gmail.com',
        subject: 'New Contact form Submission',
        text: `Name: ${name} \n Email: ${email}\n Message: ${message}`
    }, (err, info) => {
        if(err){
            console.error(err);
            res.status(500).json({ message: 'Failed to send email.'});
        }else{
            console.log('Email sent: '+ info.response);
            res.json({message: 'Email sent successfully'});
        }
    });

});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

