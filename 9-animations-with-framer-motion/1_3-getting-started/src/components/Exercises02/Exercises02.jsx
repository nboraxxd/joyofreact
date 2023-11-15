import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

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
      <motion.div
        className={styles.character}
        animate={{ x: translateX }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 70,
          restDelta: 0.01,
        }}
      >
        👻
      </motion.div>
    </div>
  )
}
