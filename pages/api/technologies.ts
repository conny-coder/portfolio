const technologies = [
  {
    image: 'html.svg',
    title: 'HTML',
    stars: 5.0,
    name: 'HTML',
  },
  {
    image: 'sass.svg',
    stars: 4.5,
    name: 'SCSS/SASS',
  },
  {
    image: 'js.svg',
    stars: 4.0,
    name: 'JS',
  },
  {
    image: 'express.svg',
    title: 'Express',
    stars: 3.5,
    name: 'Express',
  },
  {
    image: 'nest.svg',
    title: 'NestJS',
    stars: 4.0,
    name: 'NestJS',
  },
  {
    image: 'next.svg',
    title: 'Next.js',
    stars: 4.2,
    name: 'Next.js',
  },
  {
    image: 'node.svg',
    title: 'Node.js',
    stars: 4.0,
    name: 'Node.js',
  },
  {
    image: 'react.svg',
    title: 'React',
    stars: 4.6,
    name: 'React',
  },
  {
    image: 'typescript.svg',
    stars: 4.0,
    name: 'TypeScript',
  },
  {
    image: 'redux.svg',
    title: 'React redux',
    stars: 4.3,
    name: 'Redux',
  },
  {
    image: 'git.svg',
    title: 'Git',
    stars: 4.5,
    name: 'Git',
  },
]

export default function handler(req: any, res: any) {
  res.status(200).json(technologies)
}
