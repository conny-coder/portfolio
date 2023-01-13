import styles from './Modal.module.scss'
import cn from 'classnames'
import { FC } from 'react'

const Modal: FC<{ isModal: boolean }> = ({ isModal }) => {
  return (
    <div
      className={cn(styles.modal, {
        [styles.modal_active]: isModal,
      })}
    >
      <div className={styles.title}>
        <div className={styles.circles}>
          <span></span>
          <span></span>
        </div>
        <span>Bio.js</span>
      </div>
      <div>
        Hi! My name is Kostia and I am a Frontend-developer for more than 1
        years now.
      </div>
      <div>
        I like building convenient and beautiful websites, make animations and
        logic. My best qualities: friendliness, motivation, perseverance,
        logical thinking
      </div>
      <div>
        English level: B1. My main stack is: JavaScript, ReactJS and NextJS.
      </div>
      <div>Purpose: Become a high-demand senior developer.</div>
    </div>
  )
}
export default Modal
