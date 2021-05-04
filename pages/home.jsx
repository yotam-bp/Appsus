const { Link } = ReactRouterDOM
export class Home extends React.Component {

    render() {
        return (
            <section>
                <h2>Appsus</h2>
                <Link to="/about">about</Link>
                <Link to="/miss-books">books</Link>
                <Link to="/miss-keep">notes</Link>
                {/* <Link to="/about">about</Link> */}
            </section>
        )
    }
}