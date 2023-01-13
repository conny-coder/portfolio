import { FC, MutableRefObject, useEffect, useState } from 'react'
import { APP_URL } from '../../../constants'
import styles from './Bubbles.module.scss'
import { useBubble } from './useBubble'
import cn from 'classnames'
import { scrollView } from './scrollView'

interface BubblesProps {
  innerRefs: MutableRefObject<any>[]
}

const Bubbles: FC<BubblesProps> = ({ innerRefs }) => {
  const [isMenu, setIsMenu] = useState<boolean>(false)

  const ref1 = useBubble()
  const ref2 = useBubble()
  const ref3 = useBubble()
  const ref4 = useBubble()

  const refs: MutableRefObject<any>[] = [ref1, ref2, ref3, ref4]

  useEffect(() => {
    innerRefs.map((ref, idx) => {
      scrollView(refs[idx].current, ref.current, setIsMenu)
    })
  }, [])

  useEffect(() => {
    if (isMenu) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'visible'
    }
  }, [isMenu])

  return (
    <>
      <button
        onClick={() => setIsMenu(!isMenu)}
        className={cn(styles['menu-button'], {
          [styles['button-active']]: isMenu,
        })}
      >
        <span></span>
      </button>
      <div
        className={cn(styles.menu, {
          [styles.active]: isMenu,
        })}
      >
        <div className={styles.bubble} ref={ref1}>
          <img src={`${APP_URL}/icons/bubble.png`} alt='' />
          <span>About Me</span>
          <span>A</span>
        </div>
        <div className={styles.bubble} ref={ref2}>
          <img src={`${APP_URL}/icons/bubble.png`} alt='' />
          <span>Projects</span>
          <span>P</span>
        </div>
        <div className={styles.bubble} ref={ref3}>
          <img src={`${APP_URL}/icons/bubble.png`} alt='' />
          <span>Technologies</span>
          <span>T</span>
        </div>
        <div className={styles.bubble} ref={ref4}>
          <img src={`${APP_URL}/icons/bubble.png`} alt='' />
          <span>Send me</span>
          <span>S</span>
        </div>
      </div>
    </>
  )
}
export default Bubbles
