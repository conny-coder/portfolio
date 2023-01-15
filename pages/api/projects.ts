const projects = [
  {
    title: 'Converter',
    photo: 'converter.jpg',
    git: 'https://github.com/conny-coder/converter',
    link: 'https://conny-coder.github.io/converter/',
    technologies: 'React',
  },
  {
    title: 'ToDo',
    photo: 'todo.jpg',
    git: 'https://github.com/conny-coder/toDo',
    link: 'https://conny-coder.github.io/toDo/',
    technologies: 'React',
  },
  {
    title: 'Portfolio',
    photo: 'portfolio.jpg',
    git: 'https://github.com/conny-coder/portfolio',
    technologies: 'Next.js | TailwindCSS',
  },
  {
    title: 'Cards game',
    photo: 'cards.jpg',
    git: 'https://github.com/conny-coder/cards',
    link: 'https://conny-coder.github.io/cards/',
    technologies: 'React',
  },
]

export default function handler(req: any, res: any) {
  res.status(200).json(projects)
}
