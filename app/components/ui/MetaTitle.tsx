import Head from 'next/head'
import { FC } from 'react'
import { APP_URL } from '../../constants'

const MetaTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='shortcut icon' href={`${APP_URL}/favicon.png`} />
    </Head>
  )
}
export default MetaTitle
