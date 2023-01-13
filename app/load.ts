import axios from 'axios'
import { API_URL } from './constants'

export async function getProps() {
  const { data: projects } = await axios.get(`${API_URL}/projects/`)
  const { data: technologies } = await axios.get(`${API_URL}/technologies/`)

  return {
    projects,
    technologies,
  }
}
