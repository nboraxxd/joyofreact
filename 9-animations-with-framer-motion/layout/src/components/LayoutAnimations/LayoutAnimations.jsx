import { useState } from 'react'
import { motion } from 'framer-motion'

const SPRING = {
  type: 'spring',
  stiffness: 400,
  damping: 40,
}

export default function LayoutAnimations() {
  const [isMaximized, setIsMaximized] = useState(false)

  return (
    <>
      <motion.div layout={true} transition={SPRING} className={`wrapper ${isMaximized ? 'maximized' : ''}`}>
        <motion.p layout="position" transition={SPRING}>
          Hello world
        </motion.p>
      </motion.div>

      <button onClick={() => setIsMaximized(!isMaximized)}>Toggle</button>
    </>
  )
}
