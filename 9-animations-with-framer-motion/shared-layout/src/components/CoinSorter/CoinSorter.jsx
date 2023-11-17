import React, { useId } from 'react'
import range from 'lodash/range'
import { LayoutGroup, motion } from 'framer-motion'

import styles from './CoinSorter.module.css'

const NUM_OF_BOXES = 4

export default function CoinSorter({ numOfCoins }) {
  const [selectedBox, setSelectedBox] = React.useState(0)
  const id = useId()

  return (
    <LayoutGroup>
      <div className={styles.wrapper}>
        {range(NUM_OF_BOXES).map((boxIndex) => (
          <button
            key={boxIndex}
            className={`${styles.box} ${selectedBox === boxIndex ? styles.selected : ''}`}
            onClick={() => setSelectedBox(boxIndex)}
          >
            {selectedBox === boxIndex &&
              range(numOfCoins).map((coinIndex) => {
                const layoutId = `${id}-${coinIndex}`
                return (
                  <motion.div
                    layoutId={layoutId}
                    key={layoutId}
                    className={styles.coin}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 40 + coinIndex * 5,
                    }}
                  />
                )
              })}
          </button>
        ))}
      </div>
    </LayoutGroup>
  )
}
