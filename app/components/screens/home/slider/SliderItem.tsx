import { FC } from 'react'
import { APP_URL } from '../../../../constants'
import { IProject } from '../../../../types/project'
import styles from './Slider.module.scss'

const SliderItem: FC<{ project: IProject }> = ({
  project: { link, photo, title, technologies, git },
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.inform}>
        <div>{title}</div>
        <div>{technologies}</div>
        <div className={styles.links}>
          {git && (
            <a
              rel='noreferrer'
              target='_blank'
              href={git}
              className={styles['button-git']}
            >
              <img
                src={`${APP_URL}/icons/github.svg`}
                alt=''
                width={32}
                height={32}
              />
              GitHub
            </a>
          )}
          {link && (
            <a
              rel='noreferrer'
              target='_blank'
              href={link}
              className={styles['button-git']}
            >
              <img
                src={`${APP_URL}/icons/view.png`}
                alt=''
                width={32}
                height={32}
              />
              View
            </a>
          )}
        </div>
      </div>
      <img src={`${APP_URL}/projects/${photo}`} alt='' />
    </div>
  )
}
export default SliderItem
