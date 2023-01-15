import { ITechnology } from '../components/screens/home/technology/Technology'
import { IProject } from './project'

export interface IAboutMe {
  siteName: string
  description: string
}

export interface ISocial {
  link: string
  title: string
  name: string
}

export interface HomeProps {
  projects: IProject[]
  technologies: ITechnology[]
}
