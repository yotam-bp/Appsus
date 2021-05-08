const { NavLink } = ReactRouterDOM

export function AppHeader() {


    return (
        <nav className="app-header">
            <h1 className="logo"><span>A</span>ppsus</h1>
            <div className="btn-menu">
            <span>☰</span>
            <ul className="main-nav clean-list">
                <li><NavLink exact to="/" activeStyle={{ color: '#159097' }}>Home</NavLink></li>
                <li><NavLink to="/about" activeStyle={{ color: '#159097' }}>About</NavLink></li>
                <li><NavLink to="/miss-books" activeStyle={{ color: '#159097' }}>Books</NavLink></li>
                <li><NavLink to="/miss-keep" activeStyle={{ color: '#159097' }}>Notes</NavLink></li>
                <li><NavLink to="/mister-email" activeStyle={{ color: '#159097' }}>Email</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

