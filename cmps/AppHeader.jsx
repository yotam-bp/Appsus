const { NavLink } = ReactRouterDOM

export function AppHeader() {


    return (
        <nav className="app-header">
            <h1 className="logo"><span>A</span>ppsus</h1>
            <ul className="main-nav clean-list">
                <li><NavLink exact to="/" activeStyle={{ color: '#d87361' }}>Home</NavLink></li>
                <li><NavLink to="/about" activeStyle={{ color: '#d87361' }}>About</NavLink></li>
                <li><NavLink to="/miss-books" activeStyle={{ color: '#d87361' }}>Books</NavLink></li>
                <li><NavLink to="/miss-keep" activeStyle={{ color: '#d87361' }}>Notes</NavLink></li>
                <li><NavLink to="/mister-email" activeStyle={{ color: '#d87361' }}>Email</NavLink></li>
            </ul>
            <div className="btn-menu">☰</div>
        </nav>
    )
}

