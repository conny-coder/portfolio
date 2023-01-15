import axios from 'axios'
import { GetStaticProps } from 'next'
import Home from '../app/components/screens/home/Home'
import { API_URL } from '../app/constants'
import { HomeProps } from '../app/types/about-me'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: projects } = await axios.get(`${API_URL}/projects/`)
    const { data: technologies } = await axios.get(`${API_URL}/technologies/`)

    if (!projects || !technologies) {
      return {
        notFound: true,
      }
    }

    return {
      props: { projects, technologies },
    }
  } catch (error) {
    console.log(error)

    return {
      props: { projects: null, technologies: null },
    }
  }
}

export default function HomePage(props: HomeProps) {
  return <Home {...props} />
}
