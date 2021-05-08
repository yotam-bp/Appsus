import { bookService } from '../services/book.service.js'
import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookAdd } from '../cmps/BookAdd.jsx'
import { BookList } from '../cmps/BookList.jsx';
import { Loader } from '../../../cmps/Loader.jsx';
import { storageService } from '../../../services/storage.service.js';

export class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: null
    }

    componentDidMount() {
        const books = bookService.getBooks()
        this.setState({ books: books })
    }

    loadBooks() {
        bookService.query(this.state.filterBy)
            .then((books) => {
                this.setState({ books })
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    onAddBookClicked = (book) => {
        bookService.addBook(book)
            .then((books) => {
                this.setState({ books: books })
            })
    }



    render() {
        const { books } = this.state
        if (!books) return <Loader />
        return (
            <section className="books-app">
                <React.Fragment>
                    <BookFilter onSetFilter={this.onSetFilter} />
                    <BookAdd books={bookService.googleBooks} addBook={this.onAddBookClicked} />
                    <BookList books={books} />
                </React.Fragment>

            </section>
        )
    }
}

