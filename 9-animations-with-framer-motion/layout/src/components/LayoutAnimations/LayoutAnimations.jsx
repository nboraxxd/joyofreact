import { useState } from 'react'

export default function LayoutAnimations() {
  const [isMaximized, setIsMaximized] = useState(false)

  return (
    <>
      <div className={`wrapper ${isMaximized ? 'maximized' : ''}`} />

      <button onClick={() => setIsMaximized(!isMaximized)}>Toggle</button>
    </>
  )
}
