import sendEmail from '../../app/mail'

export default async function handler(req: any, res: any) {
  const message = {
    to: 'kostia.shkambula@gmail.com',
    from: 'user@gmail.com',
    subject: `Повідомлення з сайту "PORTFOLIO" от ${req.body.name}`,
    text: `Имя: ${req.body.name},\nE-mail: ${req.body.email},\nСообщение: ${req.body.message}`,
  }
  sendEmail(message)
  res.send(200)
}
