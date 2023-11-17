import { useId, useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import range from 'lodash/range'
import { LayoutGroup, motion } from 'framer-motion'

import { VisuallyHidden } from '@/components/Group'

export default function WidgetProcessor({ total }) {
  const [numOfProcessedWidgets, setNumOfProcessedWidgets] = useState(0)
  const id = useId()

  const numOfUnprocessedWidgets = total - numOfProcessedWidgets

  function handleProcessWidget() {
    if (numOfProcessedWidgets < total) {
      setNumOfProcessedWidgets(numOfProcessedWidgets + 4)
    }
  }

  function handleRevertWidget() {
    if (numOfProcessedWidgets > 0) {
      setNumOfProcessedWidgets(numOfProcessedWidgets - 4)
    }
  }

  return (
    <LayoutGroup>
      <div className="wrapper">
        <div className="inbox">
          {range(numOfUnprocessedWidgets).map((itemNum) => {
            const layoutId = `${id}-${itemNum}`

            return <motion.div layoutId={layoutId} key={layoutId} className="widget" />
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
          {range(numOfUnprocessedWidgets, total).map((itemNum) => {
            const layoutId = `${id}-${itemNum}`

            return <motion.div layoutId={layoutId} key={layoutId} className="widget" />
          })}
        </div>
      </div>
    </LayoutGroup>
  )
}
