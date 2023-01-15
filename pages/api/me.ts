const me = {
  siteName: 'Portfolio',
  description: 'About me',
}

export default function handler(req: any, res: any) {
  res.status(200).json(me)
}
