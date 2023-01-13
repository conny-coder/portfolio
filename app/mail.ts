import { NextApiRequest, NextApiResponse } from 'next'
import mailer from 'nodemailer'
import { Options } from 'nodemailer/lib/mailer'

export default async function postMail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = await mailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: '@gmail.com',
      pass: '******',
    },
    secure: true,
  })

  const mailData: Options = {
    from: '@gmail.com',
    to: '@gmail.com',
    subject: `Message From ${req.body.name}`,
    html: `<div>
			<p>Message: ${req.body.message}</p>
			<p>Sender: ${req.body.email}</p>
</div>`,
  }

  try {
    transporter.sendMail(mailData, (err) => {
      if (err) {
        console.error(err)
        res.send('error' + String(err))
      } else {
        res.status(200).send('Success!')
      }
    })
  } catch (error) {
    console.error(error)
    res.send('Failed!')
  }
}

