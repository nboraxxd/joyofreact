import styles from './BookGrid.module.css'

export default function BookGrid({ books, handleSelectBook, ...delegated }) {
  return (
    <section {...delegated}>
      <ul className={styles.wrapper}>
        {books.map((book) => (
          <li key={book.isbn}>
            <button className={styles.bookBtn} onClick={() => handleSelectBook(book)}>
              <img alt={book.name} src={book.coverSrc} className={styles.bookCover} draggable={false} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
