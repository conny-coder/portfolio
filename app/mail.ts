import mailer from 'nodemailer'

const smtpTransport = mailer.createTransport(
  {
    service: 'gmail',
    auth: {
      user: 'kostia.shkambula@gmail.com',
      pass: 'fodabgqunpfgqehb',
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
