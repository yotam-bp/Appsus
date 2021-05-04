const { Link } = ReactRouterDOM
export class Home extends React.Component {

    render() {
        return (
            <section>
                <h2>Home Sweet Home</h2>
                Check out our awesome <Link to="/about">about</Link>
                <Link to="/books">books</Link>
                <Link to="/about">about</Link>
                <Link to="/about">about</Link>
            </section>
        )
    }
}