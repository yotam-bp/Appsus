const { NavLink } = ReactRouterDOM

export function AppHeader() {

    return (
        <nav className="app-header">
            <h1>Appsus</h1>
            <ul className="main-nav clean-list">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/miss-books">Books</NavLink></li>
                <li><NavLink to="/miss-keep">Notes</NavLink></li>
                <li><NavLink to="/mister-email">Email</NavLink></li>
            </ul>
        </nav>
    )
}

