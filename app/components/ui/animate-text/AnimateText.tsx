import { useEffect, useRef } from 'react'
import styles from './AnimateText.module.scss'
import debounce from 'lodash.debounce'

const AnimateText = () => {
  const ref = useRef<any>()

  let i = 0
  let result: string = ''
  let txt = `FRONTEND DEVELOPER`

  const debounceFunc = debounce((func) => {
    func()
  }, 150)

  const debounceSlash = debounce((func) => {
    func()
  }, 700)

  function typeWriter() {
    if (i < txt.length && ref.current) {
      result += txt.charAt(i)
      ref.current.innerHTML = result
      i++
      debounceFunc(typeWriter)
      return
    }
    if (i === txt.length && ref.current) {
      ref.current.innerHTML += '|'
      i++
      debounceSlash(typeWriter)
      return
    }
    if (i > txt.length && ref.current) {
      ref.current.innerHTML = txt
      i--
      debounceSlash(typeWriter)
      return
    }
  }

  useEffect(() => {
    typeWriter()
  }, [])

  return <div className={styles.text} ref={ref}></div>
}
export default AnimateText
