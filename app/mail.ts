import mailer from 'nodemailer'

const smtpTransport = mailer.createTransport(
  {
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'kostia.shkambula@gmail.com',
      pass: 'bkuygmuicsszmrix',
    },
  },
  {
    from: 'User <user@gmail.com>',
  }
)

const sendEmail = (message: any) => {
  smtpTransport.sendMail(message, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent successfully', info)
    }
    smtpTransport.close()
  })
}

export default sendEmail
