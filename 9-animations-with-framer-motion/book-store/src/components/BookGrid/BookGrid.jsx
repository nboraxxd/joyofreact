import { motion } from 'framer-motion'
import styles from './BookGrid.module.css'

export default function BookGrid({ books, handleSelectBook, ...delegated }) {
  return (
    <section {...delegated}>
      <ul className={styles.wrapper}>
        {books.map((book) => (
          <li key={book.isbn}>
            <button className={styles.bookBtn} onClick={() => handleSelectBook(book)}>
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
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
