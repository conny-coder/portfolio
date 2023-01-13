const projects = [
  {
    title: 'Converter',
    photo: 'converter.jpg',
    git: 'https://github.com/conny-coder/converter',
    link: 'https://conny-coder.github.io/converter/',
    technologies: 'React | TailwindCSS',
  },
  {
    title: 'ToDo',
    photo: 'todo.jpg',
    git: 'https://github.com/conny-coder/toDo',
    link: 'https://conny-coder.github.io/toDo/',
    technologies: 'React',
  },
  {
    title: 'Converter',
    photo: 'converter.jpg',
    git: 'https://github.com/conny-coder/converter',
    link: 'https://conny-coder.github.io/converter/',
    technologies: 'React | TailwindCSS',
  },
  {
    title: 'ToDo',
    photo: 'todo.jpg',
    git: 'https://github.com/conny-coder/toDo',
    link: 'https://conny-coder.github.io/toDo/',
    technologies: 'React',
  },
]

export default function handler(req: any, res: any) {
  res.status(200).json(projects)
}
