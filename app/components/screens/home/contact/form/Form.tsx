import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Form.module.scss'
import cn from 'classnames'
import { API_URL, APP_URL } from '../../../../../constants'
import axios from 'axios'
import Alert from '../../../../ui/alert/Alert'
import { useState } from 'react'

interface IForm {
  email: string
  name: string
  message: string
}

const Form = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<IForm>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      await axios.post(`${API_URL}/send-request`, {
        email: getValues('email'),
        message: getValues('message'),
        name: getValues('name'),
      })
      reset()
      setIsShow(true)
    } catch (error) {
      console.log('Sending error', error)
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <span>E-mail</span>
          <input
            className={cn('', {
              [styles['input-error']]: errors.email,
            })}
            type='text'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            })}
          />
        </div>
        <div className={styles.error}>
          {errors.email && errors.email.message}
        </div>
        <div className={styles.row}>
          <span>Your name</span>
          <input
            className={cn('', {
              [styles['input-error']]: errors.name,
            })}
            {...register('name', {
              required: 'Name is required',
              validate: {},
            })}
            type='text'
          />
        </div>
        <div className={styles.error}>{errors.name && errors.name.message}</div>
        <div className={styles.row}>
          <span>Your message</span>
          <input
            className={cn('', {
              [styles['input-error']]: errors.message,
            })}
            {...register('message', {
              required: 'Message is required',
            })}
            type='text'
          />
        </div>
        <div className={styles.error}>
          {errors.message && errors.message.message}
        </div>
        <button className={styles.button}>Send me</button>
      </form>
      <Alert isShow={isShow} setIsShow={setIsShow} />
    </>
  )
}
export default Form
