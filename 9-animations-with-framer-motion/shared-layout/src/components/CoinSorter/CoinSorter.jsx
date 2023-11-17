import React from 'react'
import range from 'lodash.range'
import { motion } from 'framer-motion'

import styles from './CoinSorter.module.css'

const NUM_OF_BOXES = 4

export default function CoinSorter({ numOfCoins }) {
  const [selectedBox, setSelectedBox] = React.useState(0)

  return (
    <div className={styles.wrapper}>
      {range(NUM_OF_BOXES).map((boxIndex) => (
        <button
          key={boxIndex}
          className={`${styles.box} ${selectedBox === boxIndex ? styles.selected : ''}`}
          onClick={() => setSelectedBox(boxIndex)}
        >
          {selectedBox === boxIndex &&
            range(numOfCoins).map((coinIndex) => {
              return <div key={coinIndex} className={styles.coin} />
            })}
        </button>
      ))}
    </div>
  )
}
