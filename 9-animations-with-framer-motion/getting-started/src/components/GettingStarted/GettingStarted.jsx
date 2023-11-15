import { useState } from 'react'
import { motion } from 'framer-motion'
import '@/components/GettingStarted.css'

function Toggle() {
  const [isEnabled, setIsEnabled] = useState(true)

  return (
    <>
      <motion.div
        initial={false}
        animate={{ y: isEnabled ? 60 : 0 }}
        className="yellow ball"
        transition={{
          type: 'spring', // default is spring value
          stiffness: 200, // độ cứng
          // damping: 0, // giảm độ nảy, damping càng lớn, độ nảy càng thấp
        }}
      />
      <button onClick={() => setIsEnabled(!isEnabled)}>Toggle</button>
    </>
  )
}

export default Toggle
