import { useState } from 'react'
import range from 'lodash/range'
import { WidgetProcessor } from '@/components/OtherGroup'

export default function Container() {
  const [widgets, setWidgets] = useState(() => {
    return range(8).map(() => {
      return {
        id: crypto.randomUUID(),
        status: 'unprocessed',
      }
    })
  })

  function processWidget(id, status) {
    const remainingWidgets = widgets.filter((widget) => widget.id !== id)

    if (status === 'processed') {
      setWidgets([{ id, status }, ...remainingWidgets])
    } else if (status === 'unprocessed') {
      setWidgets([...remainingWidgets, { id, status }])
    }
  }

  return (
    <>
      <WidgetProcessor widgets={widgets} processWidget={processWidget} />
    </>
  )
}
