export function SearchBookPreview({ book, addBook }) {
    const { title } = book.volumeInfo
    return (
        <section className="add-books-modal">
            <ul>
                <li>{title}</li>
                <button key={book.id} onClick={()=>addBook(book)}>+</button>
            </ul>
        </section>

    )
}


