import { useEffect, useRef } from 'react'

export const useBubble = () => {
  const ref = useRef<any>()

  useEffect(() => {
    function randomValue(max: number, min: number): number {
      return Math.random() * (max - min) + min
    }

    function runMove() {
      interval = setInterval(() => {
        coorX += x
        coorY += y
        bubble.style.left = coorX + 'px'
        bubble.style.top = coorY + 'px'

        if (coorX + 40 >= window.innerWidth) {
          x = randomValue(-1, -2)
          y = randomValue(2, -2)
        }

        if (coorX <= 0) {
          x = randomValue(2, 1)
          y = randomValue(2, -2)
        }

        if (coorY <= 0) {
          x = randomValue(2, -2)
          y = randomValue(2, 1)
        }

        if (coorY + 40 >= window.innerHeight) {
          x = randomValue(2, -2)
          y = randomValue(-1, -2)
        }

        bubble.addEventListener('mouseover', () => {
          if (x !== 0 && y !== 0) {
            stopX = x
            stopY = y
          }
          x = 0
          y = 0
        })

        bubble.addEventListener('mouseout', () => {
          x = stopX
          y = stopY
        })
      }, 15)
    }

    const bubble = ref.current
    let coorX: number = bubble.getBoundingClientRect().left
    let coorY: number = bubble.getBoundingClientRect().top
    let x: number = randomValue(-2, 2)
    let y: number = randomValue(-2, 2)
    let stopX: number = 0
    let stopY: number = 0
    let interval: any
    if (window.innerWidth > 900) {
      bubble.addEventListener('click', (e: any) => {
        e.preventDefault()
      })

      runMove()
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

  return ref
}
