const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')
const express = require('express')
const server = express();

server.use(bodyParser.json())
server.use(cors())

server.post('/email', (req, res) => {
  
    const { to, subject, html } = req.body;
    
  const transporter = nodemailer.createTransport({
    host:'smtp.mail.yahoo.com',
    service: 'Yahoo',
    port:465,
    secure:false,
    auth: {
      user: 'siddajmera@yahoo.com',
      pass: 'gvzkttsalgaafgzd',
    },
})
const mailOptions = {
    from: 'siddajmera@yahoo.com',
    to:to,
    subject: subject,
    html: html,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});


    
    



server.listen(8080)