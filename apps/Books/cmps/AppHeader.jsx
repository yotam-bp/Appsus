// import { eventBusService } from '../services/event-bus-service.js'

const { NavLink } = ReactRouterDOM

export function AppHeader() {

    return (
        <nav className="app-header">
            <h1>Miss Books</h1>
            <ul className="clean-list">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

