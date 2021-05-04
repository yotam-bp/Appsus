import { bookService } from '../services/book.service.js'
import { BookFilter } from '../cmps/BookFilter.jsx'
// import { BookAdd } from '../cmps/BookAdd.jsx'
// import { BookDetails } from '../pages/BookDetails.jsx'
import { BookList } from '../cmps/BookList.jsx';
import { Loader } from '../../../cmps/Loader.jsx';

export class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: null
    }

    componentDidMount() {
       const books =  bookService.getBooks()
       this.setState({books:books})
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

    // onAddBookClicked = (book) =>{
    //     const newBook = {
    //         id: book.id,
    //         ...book.volumeInfo,
    //         description: book.volumeInfo.description,
    //         thumbnail: book.volumeInfo.imageLinks.thumbnail,
    //         listPrice: {
    //             "amount": 186,
    //             "currencyCode": "ILS",
    //             "isOnSale": false
    //         }
    //     }

    //     const newBooks = this.state.books
    //     newBooks.push(newBook)
    //     bookService.saveBooks(newBooks).then(()=>{
    //         this.setState({book:newBooks})
    //     })    
    // }

    render() {
        const { books } = this.state
        if (!books) return <Loader/>
        return (
            <section className="app">
                 <React.Fragment>
                    <BookFilter onSetFilter={this.onSetFilter} />
                     {/* <BookDetails/> */}
                    {/* <BookAdd books={bookService.googleBooks} addBook={this.onAddBookClicked}/> */}
                    <BookList books={books} />
                </React.Fragment>
                
            </section>
        )
    }
}