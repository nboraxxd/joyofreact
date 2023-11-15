import { useEffect, useRef, useState } from 'react'

import styles from '@/components/Exercises02/Exercises02.module.css'

export default function Toasty() {
  const [isShown, setIsShown] = useState(false)

  const wrapperRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries

      setIsShown(entry.isIntersecting)
    })

    observer.observe(wrapperRef.current)
  }, [])

  const translateX = isShown ? '0%' : '100%'

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div
        className={styles.character}
        style={{
          transition: 'transform 200ms',
          transform: `translateX(${translateX})`,
        }}
      >
        👻
      </div>
    </div>
  )
}
