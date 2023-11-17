import { X } from 'react-feather'

import { VisuallyHidden } from '@/components//VisuallyHidden'
import styles from './ReadingList.module.css'

export default function ReadingList({ books, handleRemoveBook }) {
  return (
    <>
      <div className={styles.wrapper}>
        <h2>Reading List</h2>
        <ol className={styles.books}>
          {books.map((book) => {
            return (
              <li key={book.isbn}>
                <img alt={book.name} src={book.coverSrc} draggable={false} className={styles.bookCover} />
                <button className={styles.deleteBtn} onClick={() => handleRemoveBook(book)}>
                  <X />
                  <VisuallyHidden>Remove {book.name}</VisuallyHidden>
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </>
  )
}
