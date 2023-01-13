import { FC } from 'react'
import { APP_URL } from '../../../../constants'
import Description from '../../../ui/description/Description'
import Modal from '../../../ui/modal/Modal'
import SocialButtons from '../social/SocialButtons'
import styles from './Information.module.scss'
import { useMe } from './useMe'
import { useSocials } from './useSocials'

const Information = () => {
  const me = useMe()
  const socials = useSocials()

  return (
    <div className={styles.me}>
      <div className={styles.link}>
        <Description />
      </div>
      <div className={styles['image-wrapper']}>
        {me && (
          <img
            src={`${APP_URL}${me.avatar}`}
            width={190}
            height={190}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.heading}>
        <span>Conny</span>
        <img src={`${APP_URL}/icons/portfolio.svg`} height={20} width={20} />
      </div>
      {socials && <SocialButtons socials={socials} />}
    </div>
  )
}
export default Information
