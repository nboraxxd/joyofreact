import { useState } from 'react'
import { Toggle } from '@/components/Exercises01'

export default function Container() {
  const [isEnabled, setIsEnabled] = useState(true)

  return (
    <>
      <Toggle value={isEnabled} onChange={setIsEnabled} />
    </>
  )
}
