const projects = [
  {
    title: 'Shodrop',
    photo: 'shodrop.webp',
    git: 'https://github.com/conny-coder/shodrop',
    link: 'https://conny-coder.github.io/shodrop/',
    technologies: 'HTML | CSS | JS | Wordpress',
  },
  {
    title: 'Converter',
    photo: 'converter.webp',
    git: 'https://github.com/conny-coder/converter/tree/main/code',
    link: 'https://conny-coder.github.io/converter/',
    technologies: 'React',
  },
  {
    title: 'ToDo',
    photo: 'todo.webp',
    git: 'https://github.com/conny-coder/toDo/tree/main/code',
    link: 'https://conny-coder.github.io/toDo/',
    technologies: 'React',
  },
  {
    title: 'Portfolio',
    photo: 'portfolio.webp',
    git: 'https://github.com/conny-coder/portfolio',
    technologies: 'Next.js | TailwindCSS',
  },
  {
    title: 'Cards game',
    photo: 'cards.webp',
    git: 'https://github.com/conny-coder/cards-game/tree/main/code',
    link: 'https://conny-coder.github.io/cards-game/',
    technologies: 'React',
  },
]

export default function handler(req: any, res: any) {
  res.status(200).json(projects)
}
