import { useOutside } from '../../../hooks/useOutside'
import Modal from '../modal/Modal'
import styles from './Description.module.scss'

const Description = () => {
  const { isShow, ref, setIsShow } = useOutside(false)

  return (
    <div ref={ref} className={styles.modal}>
      <div
        className={styles.button}
        onClick={() => {
          setIsShow(!isShow)
        }}
      >
        About Me
      </div>
      <Modal isModal={isShow} />
    </div>
  )
}
export default Description
