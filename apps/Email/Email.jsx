// const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import {emailService} from './services/email.service.js';
import { EmailDetails } from './pages/EmailDetails.jsx';
import { EmailHeader } from './cmps/EmailHeader.jsx'
import { EmailApp } from './cmps/EmailApp.jsx'


export class Email extends React.Component {

    render() {
        return (
            <section>
                <header>
                    <EmailHeader />
                </header>
                <main>
                    <Switch>
                    <Route component={EmailDetails} path="/mister-email/:emailId" />
                    <Route component={EmailApp} path="/" />
                    {/* <EmailApp /> */}
                    </Switch>
                </main>
            </section>
        );
    }
}
