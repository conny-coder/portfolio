const technologies = [
  {
    image: 'html.svg',
    title: 'HTML',
    stars: 5.0,
    name: 'HTML',
  },
  {
    image: 'sass.svg',
    stars: 5.0,
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
    stars: 3.0,
    name: 'Express',
  },
  {
    image: 'nest.svg',
    title: 'NestJS',
    stars: 3.5,
    name: 'NestJS',
  },
  {
    image: 'next.svg',
    title: 'Next.js',
    stars: 3.7,
    name: 'Next.js',
  },
  {
    image: 'node.svg',
    title: 'Node.js',
    stars: 3.2,
    name: 'Node.js',
  },
  {
    image: 'react.svg',
    title: 'React',
    stars: 3.6,
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
    stars: 3.8,
    name: 'Redux',
  },
  {
    image: 'git.svg',
    title: 'Git',
    stars: 4.5,
    name: 'Git',
  },
  {
    image: 'wordpress.svg',
    title: 'Wordpress',
    stars: 4.2,
    name: 'Wordpress',
  },
]

export default function handler(req: any, res: any) {
  res.status(200).json(technologies)
}
