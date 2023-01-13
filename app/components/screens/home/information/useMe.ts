import axios from 'axios'
import { useQuery, UseQueryResult } from 'react-query'
import { API_URL } from '../../../../constants'
import { IAboutMe } from '../../../../types/about-me'

export const useMe = () => {
  const { data }: UseQueryResult<IAboutMe> = useQuery(
    'me',
    () => axios.get(`${API_URL}/me`),
    {
      select: ({ data }) => data,
    }
  )

  return data
}
