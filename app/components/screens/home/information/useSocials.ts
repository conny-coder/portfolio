import axios from 'axios'
import { useQuery, UseQueryResult } from 'react-query'
import { API_URL } from '../../../../constants'
import { ISocial } from '../../../../types/about-me'

export const useSocials = () => {
  const { data }: UseQueryResult<ISocial[]> = useQuery(
    'socials',
    () => axios.get(`${API_URL}/socials`),
    {
      select: ({ data }) => data,
    }
  )

  return data
}
