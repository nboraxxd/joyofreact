import { useState } from 'react'
import { motion } from 'framer-motion'

function Toggle() {
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <>
      <div className="yellow ball" />
      <button onClick={() => setIsEnabled(!isEnabled)}>Toggle</button>
    </>
  )
}

export default Toggle
