import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import range from 'lodash/range'

import { VisuallyHidden } from '@/components/Group'

export default function WidgetProcessor({ total }) {
  const [numOfProcessedWidgets, setNumOfProcessedWidgets] = useState(0)

  const numOfUnprocessedWidgets = total - numOfProcessedWidgets

  function handleProcessWidget() {
    if (numOfProcessedWidgets < total) {
      setNumOfProcessedWidgets(numOfProcessedWidgets + 1)
    }
  }

  function handleRevertWidget() {
    if (numOfProcessedWidgets > 0) {
      setNumOfProcessedWidgets(numOfProcessedWidgets - 1)
    }
  }

  return (
    <div className="wrapper">
      <div className="inbox">
        {range(numOfUnprocessedWidgets).map((itemNum) => {
          return <div key={itemNum} className="widget" />
        })}
      </div>

      <div className="actions">
        <button onClick={handleProcessWidget}>
          <VisuallyHidden>Process widget</VisuallyHidden>
          <ChevronDown />
        </button>
        <button onClick={handleRevertWidget}>
          <ChevronUp />
          <VisuallyHidden>Revert widget</VisuallyHidden>
        </button>
      </div>

      <div className="outbox">
        {range(numOfProcessedWidgets).map((itemNum) => {
          return <div key={itemNum} className="widget" />
        })}
      </div>
    </div>
  )
}
