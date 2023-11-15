import { useState } from 'react'
import Toggle from '@/components/Exercises01'

function App() {
  const [isEnabled, setIsEnabled] = useState(true)

  return (
    <>
      <Toggle value={isEnabled} onChange={setIsEnabled} />
    </>
  )
}

export default App
