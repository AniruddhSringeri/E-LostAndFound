import express from 'express'
const router = express.Router()

import nodemailer from 'nodemailer'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'elostfound204@gmail.com',
      pass: 'karjpraan@2020'
    }
  });
  
  var mailOptions = {
    from: 'BMSCE Lost and Found <elostfound204@gmail.com>',
    to: '',
    subject: 'Someone has claimed the item you found',
    text: `Your OTP is `
  };

  router.post('/confirm', (req, res)=>{
      const { userEmail, toEmail} = req.body
      mailOptions.to = toEmail
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });



  })

  export default router

