import Title from '../../../ui/title/Title'
import styles from './Contact.module.scss'
import Form from './form/Form'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Title title='Contact me' />
      <div className={styles.inner}>
        <Form />
      </div>
    </div>
  )
}
export default Contact
