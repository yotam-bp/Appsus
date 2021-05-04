const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { Books } from './apps/Books/Books.jsx';
// import { NoteApp } from './apps/Keep/NoteApp.jsx';
// import { MailApp } from './apps/Mail/MailApp.jsx';
// import { AppHeader } from './cmps/AppHeader.jsx';
// import { AppFooter } from './cmps/AppFooter.jsx';
import { About } from './pages/About.jsx';
import { Home } from './pages/Home.jsx';

export class App extends React.Component {

    render() {
        return (
            <Router>
                <section className="container">
                    {/* <AppHeader /> */}
                    <main className="main">
                        <Switch>
                            <Route component={Books} path="/books"/>
                            {/* <Route component={NoteApp} path="/keep"/>
                            <Route component={MailApp} path="/mail"/> */}
                            <Route component={About} path="/about" />
                            <Route component={Home} path="/"  />
                        </Switch>
                    </main>
                    {/* <AppFooter /> */}
                </section>
            </Router>
        );
    }
}
