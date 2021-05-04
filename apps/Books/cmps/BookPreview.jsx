const { Link } = ReactRouterDOM
export function BookPreview({ book }) {
    // console.log('book ', book);
    let symbol;

    switch (book.listPrice.currencyCode) {
        case 'EUR':
            symbol = '€';
            break;
        case 'ILS':
            symbol = '₪'
            break;
        case 'USD':
            symbol = '$';
            break;
    }

    return (
        <Link to={`/miss-books/${book.id}`}>
            <article className="user-preview">
                <h3>{book.title}</h3>
                <h5>{book.authors}</h5>
                <p>price: {book.listPrice.amount}<span>{symbol}</span></p>
                <img src={book.thumbnail} />
            </article>
        </Link>
    )
}


