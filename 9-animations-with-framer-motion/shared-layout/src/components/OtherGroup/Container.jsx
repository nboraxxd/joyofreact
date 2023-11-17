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
    const nextWidgets = widgets.map((widget) => {
      if (widget.id !== id) {
        return widget
      }
      return {
        id,
        status,
      }
    })

    setWidgets(nextWidgets)
  }

  return (
    <>
      <WidgetProcessor widgets={widgets} processWidget={processWidget} />
    </>
  )
}
