import { FC, useRef } from 'react'
import styles from './Alert.module.scss'
import cn from 'classnames'

const Alert: FC<{ isShow: boolean; setIsShow: any }> = ({
  isShow,
  setIsShow,
}) => {
  const ref = useRef<any>()
  let opacity: number = 1

  if (isShow) {
    const interval = setInterval(() => {
      opacity -= 0.004
      ref.current.style.opacity = opacity
      if (opacity <= 0) {
        clearInterval(interval)
        setIsShow(false)
      }
    }, 10)
  }

  return (
    <div
      ref={ref}
      className={cn(styles.alert, {
        [styles.show]: isShow,
      })}
    >
      Thank you! I will be glad to read your message
    </div>
  )
}
export default Alert
