export default function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'info@BitsWits.com',
      pass: "$RFthuytt%%^^%$$#5",
    },
    secure: true,
  })
  let newDate = new Date()
  const mailData = {
    from: 'info@BitsWits.com',
    to: 'info@BitsWits.com',
    subject: `New Lead Generated`,
    html: `<h3>New Lead Generated Client Data Is Listed Below </h3> <p>Name : ${req.body.first}</p> <p> email : ${req.body.email}</p> <p> Date : ${newDate}</p> `
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}