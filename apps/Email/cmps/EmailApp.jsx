import { emailService } from '../services/email.service.js'
import { EmailFilter } from './EmailFilter.jsx'
import { EmailCompose } from './EmailCompose.jsx'
import { EmailList } from './EmailList.jsx'
import { Loader } from '../../../cmps/Loader.jsx'



export class EmailApp extends React.Component {
    state = {
        emails: null,
        filterBy: null
    }

    componentDidMount() {
        const emails = emailService.getEmails()
        this.setState({ emails: emails })
    }

    // loadBooks() {
    //     bookService.query(this.state.filterBy)
    //         .then((books) => {
    //             this.setState({ books })
    //         })
    // }

    // onSetFilter = (filterBy) => {
    //     this.setState({ filterBy }, this.loadBooks)
    // }

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
        const { emails, filterBy } = this.state
        if (!emails) return <Loader />
        return (
            <section>
                <h1>here in email app</h1>
                <React.Fragment>
                    {/* <EmailFilter /> */}
                    {/* <Route component={EmailCompose} path="/compose" /> */}
                    <EmailList emails={emails} />
                </React.Fragment>

            </section>
        )
    }
}