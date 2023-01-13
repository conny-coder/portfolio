import axios from 'axios'
import { GetStaticProps } from 'next'
import Home from '../app/components/screens/home/Home'
import { API_URL } from '../app/constants'
import { getProps } from '../app/load'
import { HomeProps } from '../app/types/about-me'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { projects, technologies } = await getProps()

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
