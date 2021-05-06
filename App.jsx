const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { Books } from './apps/Books/Books.jsx';
import { Notes } from './apps/Keeps/Notes.jsx';
// import { MailApp } from './apps/Mail/MailApp.jsx';
// import { NoteApp } from './apps/Keep/NoteApp.jsx';
import { Email } from './apps/Email/Email.jsx';
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter.jsx';
import { About } from './pages/About.jsx';
import { Home } from './pages/Home.jsx';

export class App extends React.Component {

    render() {
        return (
            <Router>
                <section className="container">
                    <AppHeader />
                    <main className="main flex justify-center">
                        <Switch>
                            <Route component={Books} path="/miss-books"/>
                            <Route component={Notes} path="/miss-keep"/>
                            <Route component={Email} path="/mister-email"/>
                            <Route component={About} path="/about" />
                            <Route component={Home} path="/"  />
                        </Switch>
                    </main>
                    <AppFooter />
                </section>
            </Router>
        );
    }
}
