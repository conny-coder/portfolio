import { useEffect, useRef, useState } from 'react'

export const useCountStars = (maxCount: number) => {
  const [count, setCount] = useState<number>(2)
  const ref = useRef<any>()
  let intervalAdd: any
  let intervalSub: any
  let countListen = 0
  let currentCount: number = 2

  useEffect(() => {
    ref.current.addEventListener('mouseover', () => {
      clearInterval(intervalSub)
      if (!(currentCount >= maxCount) && countListen == 0) {
        intervalAdd = setInterval(() => {
          currentCount += 0.05
          setCount((prev) => prev + 0.05)
          if (currentCount >= maxCount) {
            clearInterval(intervalAdd)
          }
        }, 20)
      }
      countListen = 1
    })

    ref.current.addEventListener('mouseleave', () => {
      clearInterval(intervalAdd)
      if (!(currentCount <= 2) && countListen == 1) {
        intervalSub = setInterval(() => {
          currentCount -= 0.1
          setCount((prev) => prev - 0.1)
          if (currentCount <= 2) {
            clearInterval(intervalSub)
          }
        }, 50)
      }
      countListen = 0
    })

    return () => {
      ref.current.removeEventListener('mouseover', () => {
        clearInterval(intervalSub)
        countListen == 0 ? (countListen = 1) : (countListen = 2)
        if (!(currentCount >= maxCount) && countListen == 1) {
          intervalAdd = setInterval(() => {
            currentCount += 0.1
            setCount((prev) => prev + 0.1)
            if (currentCount >= maxCount) clearInterval(intervalAdd)
          }, 50)
        }
      })
      ref.current.removeEventListener('mouseleave', () => {
        clearInterval(intervalAdd)
        countListen == 2 ? (countListen = 1) : (countListen = 0)
        if (!(currentCount <= 2) && countListen == 0) {
          intervalSub = setInterval(() => {
            currentCount -= 0.1
            setCount((prev) => prev - 0.1)
            console.log(currentCount)
            if (currentCount <= 2) {
              clearInterval(intervalSub)
            }
          }, 50)
        }
      })
      clearInterval(intervalAdd)
      clearInterval(intervalSub)
    }
  }, [])

  return {
    ref,
    count,
  }
}
