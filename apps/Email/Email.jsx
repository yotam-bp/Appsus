// const Router = ReactRouterDOM.HashRouter;
const { Link } = ReactRouterDOM
const { Route, Switch } = ReactRouterDOM;

import { emailService } from './services/email.service.js';
import { eventBusService } from '../../services/eventBusService.js';
import { EmailCompose } from './cmps/EmailCompose.jsx';
import { EmailDetails } from './pages/EmailDetails.jsx';
import { EmailFilter } from './cmps/EmailFilter.jsx';
import { EmailList } from './cmps/EmailList.jsx'
import { EmailHeader } from './cmps/EmailHeader.jsx';



export class Email extends React.Component {

    removeEvent;

    state = {
        emails: [],
        filterBy: null,
        unreadCount: 0
    }

    componentDidMount() {
        this.loadEmails()
        this.removeEvent = eventBusService.on('unread-count', (unreadCount) => {
            this.setState({ unreadCount })
        })
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy)
            .then(emails => {
                this.setState({ emails })
                const unreadEmails = emails.filter((email) => {
                    return (!email.isRead)
                })
                eventBusService.emit('unread-count', unreadEmails.length)
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    removeEmail = (emailId) => {
        emailService.deleteEmail(emailId)
            .then(emails => {
                this.setState({ emails })
            })
    }

    toggleIsRead = (emailToUpdate) => {
        emailService.updateIsRead(emailToUpdate)
            .then(emails => {
                this.setState({ emails })
                const unreadEmails = emails.filter((email) => {
                    return (!email.isRead)
                })
                eventBusService.emit('unread-count', unreadEmails.length)
            })
    }

    // onCompose = () => {
    //     emailService.sa
    // }

    render() {
        const { emails } = this.state
        if (!emails) return <div>Loading...</div>
        return (
            <section>
                <header>
                    <EmailHeader />
                </header>
                <main className="email-main">
                    {/* <span> Compose</span> */}
                    <Link to={"/mister-email/compose"}>
                        <div className="email-compose-btn">
                            <i className="fas fa-plus"></i>
                            <div>Compose</div>
                        </div>
                    </Link>
                    <section className="email-search">
                        <EmailFilter onSetFilter={this.onSetFilter} />
                    </section>
                    <section className="email-side-bar">
                        <i className="fas fa-inbox"></i>
                        <Link to={"/mister-email/"}>
                        <div>Inbox<span>  {this.state.unreadCount} unread</span></div>
                            </Link> 
                        <i className="far fa-paper-plane"></i>
                        <div>Sent</div>
                        <i className="far fa-star"></i>
                        <div>Starred</div>
                        <i className="fab fa-firstdraft"></i>
                        <div>Drafts</div>
                    </section>
                    <section className="email-inbox">
                        <Switch>
                            <Route component={EmailCompose}  path="/mister-email/compose" />
                            <Route component={EmailDetails} path="/mister-email/:emailId" />
                            <Route component={() => <EmailList emails={emails} removeEmail={this.removeEmail} toggleIsRead={this.toggleIsRead} />} path={'/mister-email'} />
                        </Switch>
                    </section>
                </main>
            </section>
        );
    }
}
