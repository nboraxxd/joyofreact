import { useState } from 'react'

import DATA from '@/utils/data'
import { BookGrid } from '@/components/BookGrid'
import { ReadingList } from '@/components/ReadingList'
import styles from './BookPage.module.css'

export default function BookPage() {
  const [books, setBooks] = useState(DATA)

  function toggleBook(toggledBook) {
    const nextBooks = books.filter((book) => book.isbn !== toggledBook.isbn)

    setBooks([...nextBooks, { ...toggledBook, selected: !toggledBook.selected }])
  }

  const selectedBooks = books.filter((book) => book.selected)
  const unselectedBooks = books.filter((book) => !book.selected)

  return (
    <div className={styles.wrapper}>
      <BookGrid className={styles.grid} books={unselectedBooks} handleSelectBook={toggleBook} />
      {selectedBooks.length > 0 && <ReadingList books={selectedBooks} handleRemoveBook={toggleBook} />}
    </div>
  )
}
