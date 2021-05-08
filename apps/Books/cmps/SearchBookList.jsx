import { SearchBookPreview } from './SearchBookPreview.jsx';


export function SearchBookList({ searchBooks, addBook }) {
    return <div className="search-book-list flex flex-col">
        {searchBooks.map(book => {
            return <SearchBookPreview book={book} key={book.id} addBook={addBook}/>
        })}
    </div>

}

