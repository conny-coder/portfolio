import postMail from '../../app/mail'
// import sendEmail from '../../app/mail'

export default async function handler(req: any, res: any) {
  postMail(req, res)
  res.send(200)
}
