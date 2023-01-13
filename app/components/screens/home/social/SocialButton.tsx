import { FC } from 'react'
import { APP_URL } from '../../../../constants'
import styles from './SocialButton.module.scss'

interface ISocialButton {
  link: string
  title: string
  name: string
}

const SocialButton: FC<ISocialButton> = ({ link, name, title }) => {
  return (
    <div className={styles.button}>
      <a href={link} target='_blank' rel='noreferrer'>
        <span>
          <img
            src={`${APP_URL}/icons/${name}`}
            alt={title}
            width={22}
            height={22}
          />
        </span>
        {title}
      </a>
    </div>
  )
}
export default SocialButton
