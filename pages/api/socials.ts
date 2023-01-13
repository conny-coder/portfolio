export const socials = [
  {
    link: 'https://www.instagram.com/_shkambula_k._/',
    name: 'instagram.svg',
    title: 'Instagram',
  },
  {
    link: 'https://t.me/shkambulak',
    name: 'telegram.svg',
    title: 'Telegram',
  },
  {
    link: 'mailto:kostia.shkambula@gmail.com',
    name: 'email.svg',
    title: 'Gmail',
  },
]

export default function handler(req: any, res: any) {
  res.status(200).json(socials)
}
