import { bookService } from '../services/book.service.js'
import { SearchBookList } from './SearchBookList.jsx'

export class BookAdd extends React.Component {
    state = {
        booksToAdd: [],
        searchQuery: '',
        filteredBooks: []
    }
    componentDidMount() {
        this.getBooks()
    }
    handleChange = (ev) => {
        const { value } = ev.target
        let filteredBooks = []

        if (value !== '') {
            filteredBooks = this.state.booksToAdd.filter((book) => {
                return book.volumeInfo.title.includes(value)
            })
        }
        this.setState({ searchQuery: value, filteredBooks: filteredBooks })
    }


    getBooks() {
        bookService.getGoogleBooks()
            .then((books) => {
                this.setState({ booksToAdd: books })
            })
    }

    render() {
        return (
            <section>
                <label htmlFor="search-book">Search </label>
                <input name="search-book" type="search" onChange={this.handleChange} value={this.state.searchQuery} />
                <SearchBookList searchBooks={this.state.filteredBooks} addBook={this.props.addBook}/>
            </section >
        )
    }
}