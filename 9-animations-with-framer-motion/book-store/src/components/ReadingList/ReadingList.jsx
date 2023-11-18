import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'react-feather'

import { VisuallyHidden } from '@/components/VisuallyHidden'
import styles from './ReadingList.module.css'

export default function ReadingList({ books, handleRemoveBook }) {
  const [highlightedIndex, setHighlightedIndex] = useState(null)

  return (
    <>
      <div className={styles.wrapper}>
        <h2>Reading List</h2>
        <ol className={styles.books} onMouseLeave={() => setHighlightedIndex(null)}>
          {books.map((book, bookIndex) => {
            const reverseBookIndex = books.length - bookIndex - 1

            let height = Math.max(50 - reverseBookIndex * 5, 10)

            if (bookIndex === highlightedIndex) {
              height = 100
            }

            return (
              <li key={book.isbn} style={{ height }} onMouseEnter={() => setHighlightedIndex(bookIndex)}>
                <motion.img
                  layoutId={`book-cover-${book.isbn}`}
                  src={book.coverSrc}
                  alt={book.name}
                  draggable={false}
                  className={styles.bookCover}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 60,
                  }}
                />
                <motion.button
                  layout="position"
                  className={styles.deleteBtn}
                  onFocus={() => setHighlightedIndex(bookIndex)}
                  onClick={() => handleRemoveBook(book)}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 60,
                  }}
                >
                  <X />
                  <VisuallyHidden>Remove {book.name}</VisuallyHidden>
                </motion.button>
              </li>
            )
          })}
        </ol>
      </div>
    </>
  )
}
