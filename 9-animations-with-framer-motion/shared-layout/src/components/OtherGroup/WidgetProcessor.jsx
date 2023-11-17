import { LayoutGroup, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'react-feather'

import VisuallyHidden from './VisuallyHidden'

export default function WidgetProcessor({ widgets, processWidget }) {
  const unprocessedWidgets = widgets.filter((widget) => widget.status === 'unprocessed')
  const processedWidgets = widgets.filter((widget) => widget.status === 'processed')

  function handleProcessWidgetBtn(widget, status) {
    if (!widget) return

    processWidget(widget.id, status)
  }

  return (
    <LayoutGroup>
      <div className="wrapper">
        <div className="inbox">
          {unprocessedWidgets.map((widget) => {
            return (
              <motion.button
                layoutId={widget.id}
                key={widget.id}
                className="widget"
                onClick={() => processWidget(widget.id, 'processed')}
              />
            )
          })}
        </div>

        <div className="actions">
          <button onClick={() => handleProcessWidgetBtn(unprocessedWidgets.at(-1), 'processed')}>
            <VisuallyHidden>Process widget</VisuallyHidden>
            <ChevronDown />
          </button>

          <button onClick={() => handleProcessWidgetBtn(processedWidgets.at(0), 'unprocessed')}>
            <ChevronUp />
            <VisuallyHidden>Revert widget</VisuallyHidden>
          </button>
        </div>

        <div className="outbox">
          {processedWidgets.map((widget) => {
            return (
              <motion.button
                layoutId={widget.id}
                key={widget.id}
                className="widget"
                onClick={() => processWidget(widget.id, 'unprocessed')}
              />
            )
          })}
        </div>
      </div>
    </LayoutGroup>
  )
}
