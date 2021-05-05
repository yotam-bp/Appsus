// const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { emailService } from './services/email.service.js';
import { eventBusService } from '../../services/eventBusService.js';
import { EmailDetails } from './pages/EmailDetails.jsx';
import { EmailHeader } from './cmps/EmailHeader.jsx'
import { EmailApp } from './cmps/EmailApp.jsx'


export class Email extends React.Component {
    state = {
        unreadCount: 0
    }

    componentDidMount() {
        this.removeEvent = eventBusService.on('unread-count', (unreadCount)=>{
            this.setState({unreadCount})
        })
    }
    
    render() {
        return (
            <section>
                <header>
                    <EmailHeader />
                </header>
                <main className="email-main">
                    <section className="email-side-bar">
                        <div>Inbox<span>   {this.state.unreadCount} unread</span></div>
                        <div>Sent</div>
                        <div>Starred</div>
                        <div>Drafts</div>
                    </section>
                    <section>
                        <Switch>
                            <Route component={EmailDetails} path="/mister-email/:emailId" />
                            <Route component={EmailApp} path="/" />
                            {/* <EmailApp /> */}
                        </Switch>
                    </section>
                </main>
            </section>
        );
    }
}
