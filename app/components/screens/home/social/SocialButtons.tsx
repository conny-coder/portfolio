import { FC } from 'react'
import { ISocial } from '../../../../types/about-me'
import SocialButton from './SocialButton'
import styles from './SocialButton.module.scss'

const SocialButtons: FC<{ socials: ISocial[] }> = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      {socials.map((s) => (
        <SocialButton
          key={s.link}
          link={s.link}
          title={s.title}
          name={s.name}
        />
      ))}
    </div>
  )
}
export default SocialButtons
