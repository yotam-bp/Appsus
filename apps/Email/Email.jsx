const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { EmailHeader } from './cmps/EmailHeader.jsx'
import { EmailApp } from './cmps/EmailApp.jsx'


export class Email extends React.Component {

    render() {
        return (
            <Router>
                <header>
                    <EmailHeader />
                </header>
                <main>
                    {/* <Route component={EmailDetails} path="/email/:emailId"/> */}
                    <Route component={EmailApp} path="/email"/>

                    
                </main>
            </Router>
        );
    }
}
