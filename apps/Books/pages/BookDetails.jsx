import { bookService } from '../services/book.service.js'
import { Loader } from '../../../cmps/Loader.jsx'
import { ReviewAdd } from '../cmps/ReviewAdd.jsx'
import { ReviewList } from '../cmps/ReviewList.jsx'
import { TxtLength } from '../../../cmps/TxtLength.jsx'

// const { Link } = ReactRouterDOM

export class BookDetails extends React.Component {
    state = {
        book: null,
        reviews: []
    }
    componentDidMount() {
        this.loadBooks()
    }

    loadBooks() {
        const id = this.props.match.params.bookId
        bookService.getBookById(id).then(book => {
            if (!book) return this.props.history.push('/')
            this.setState({ book })
        })
    }

    get bookLength() {
        const { pageCount } = this.props;
        if (pageCount > 500) return 'long reading'
        else if (pageCount > 200) return 'decent reading'
        else return 'light reading';
    }

    get bookAge() {
        const { publishedDate } = this.state.book;
        const currDate = new Date;
        const currYear = currDate.getFullYear();
        if (currYear - publishedDate > 10) return 'veteran book';
        else if (currYear - publishedDate > 10) return 'new!';
        else return '';
    }

    get setClassName() {
        const { amount } = this.state.book.listPrice;
        if (amount > 150) return 'red';
        else if (amount < 20) return 'green';
        else return '';
    }

    get isOnSale() {
        const { isOnSale } = this.state.book.listPrice;
        if (isOnSale) return <img src="../assets/img/sale.png" />
    }

    addReview = (review) => {
        console.log('review ', review);
        const { bookId } = this.props.match.params
        bookService.addReview(bookId, review).then((book) => {
            this.setState({book: book})
            this.setState({reviews: book.reviews})
            this.loadBooks()
        })
    }



    render() {
        const { book } = this.state
        if (!book) return <Loader/>
        const { title, authors, description, language, pageCount, publishedDate, subtitle, thumbnail } = book
        const { amount } = book.listPrice;
        return (
            <section className="book-details">
                <div className="back-btn" onClick={() => this.props.history.push('/miss-books')}>←</div>
                <img src={thumbnail} />
                <h2>{title}</h2>
                <h4>by {authors}</h4>
                <p>{subtitle}</p>
                <TxtLength text={description} />
                <p><b>language:</b> {language}</p>
                <p><b>pages:</b> {pageCount} pages, {this.bookLength}</p>
                <p><b>published at: </b>{publishedDate} {this.bookAge}</p>
                <p><b>price: </b> <span className={this.setClassName}>{amount}</span></p>
                <div>{this.isOnSale}</div>
                <div className="book-reviews">
                {book.reviews && <ReviewList reviews={book.reviews}/>}
                <ReviewAdd addReview={this.addReview} />
                </div>
            </section>
        )
    }
}