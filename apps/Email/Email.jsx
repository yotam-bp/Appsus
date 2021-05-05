// const Router = ReactRouterDOM.HashRouter;
// const { Route, Switch } = ReactRouterDOM;
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
                    {/* <Route component={EmailDetails} path="/email/:emailId"/> */}
                    <EmailApp/>
                </main>
            </section>
        );
    }
}
