export function SearchBookPreview({ book, addBook }) {
    const { title } = book.volumeInfo
    return (
        <section className="add-books-modal flex justify-center" onClick={()=>addBook(book)}>
                <li>{title} + </li>
        </section>

    )
}


