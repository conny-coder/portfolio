import { FC } from 'react'
import { APP_URL } from '../../../../constants'
import styles from './Technology.module.scss'
import { useCountStars } from './useCountStars'

export interface ITechnology {
  image: string
  title?: string
  stars: number
  name: string
}

const Technology: FC<ITechnology> = ({ image, title, stars, name }) => {
  const { ref, count } = useCountStars(stars)
  const starsPercent = (stars / 5) * 154

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.front}>
          <img
            alt=''
            src={`${APP_URL}/technology/${image}`}
            width={100}
            height={100}
          />
          <span>{title}</span>
        </div>
        <div className={styles.back}>
          <div className={styles.inner}>
            <span>{name}</span>
            <div className={styles['stars-wrapper']}>
              <span>{count.toFixed(1)}</span>
              <div className={styles.stars}>
                <div className={styles['front-stars']}>
                  <img src={`${APP_URL}/stars.svg`} alt='' />
                </div>
                <div
                  className={styles['back-stars']}
                  style={{ width: starsPercent }}
                >
                  <div className={styles['back-box']}>
                    <div>
                      <img src={`${APP_URL}/stars-fill.svg`} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Technology
