// const Router = ReactRouterDOM.HashRouter;
const { Link } = ReactRouterDOM
const { Route, Switch } = ReactRouterDOM;

import { emailService } from './services/email.service.js';
import { eventBusService } from '../../services/eventBusService.js';
import { EmailCompose } from './cmps/EmailCompose.jsx';
import { EmailDetails } from './pages/EmailDetails.jsx';
import { EmailFilter } from './cmps/EmailFilter.jsx';
import { EmailList } from './cmps/EmailList.jsx'



export class Email extends React.Component {

    removeEvent;

    state = {
        emails: [],
        filterBy: null,
        isStarred: null,
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
                emails.sort((a, b) => {
                    a.sentAt - b.sentAt
                })
                
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

    onFilterStarred = () => {
        const { emails } = this.state;
        const stars = emails.filter(email => {
            return (email.isStarred)
        })
        this.setState({ emails: stars })
    }

    onSort = () => {
        const { emails } = this.state;
        emails.sort((a, b) => {
            a.sentAt - b.sentAt
        })
        this.setState({ emails })
    }

    removeEmail = (emailId) => {
        emailService.deleteEmail(emailId)
            .then(emails => {
                this.setState({ emails })
            })
    }

    onIsRead = (emailToUpdate) => {
        emailService.updateIsRead(emailToUpdate)
            .then(emails => {
                this.setState({ emails })
                const unreadEmails = emails.filter((email) => {
                    return (!email.isRead)
                })
                eventBusService.emit('unread-count', unreadEmails.length)
            })
    }

    onEmailClick = (emailToUpdate) => {
        this.onIsRead(emailToUpdate);
        this.props.history.push(`/mister-email/${emailToUpdate.id}`);
    }

    onStarEmail = (emailToUpdate) => {
        emailService.updateIsStarred(emailToUpdate)
            .then(emails => {
                this.setState({ emails })
            })
    }

    render() {
        const { emails } = this.state
        if (!emails) return <div>Loading...</div>
        return (
            <section>
                <main className="email-main container">
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
                        <i className="inbox-symbol fas fa-inbox"></i>
                        <Link to={"/mister-email/"}>
                            <div className="inbox-txt" onClick={this.loadEmails}>Inbox<span>  {this.state.unreadCount} unread</span></div>
                        </Link>
                        <i className="far fa-paper-plane"></i>
                        <div>Sent</div>
                        <i className="fas fa-star"></i>
                        <div onClick={this.onFilterStarred}>Starred</div>
                        <i className="fab fa-firstdraft"></i>
                        <div>Drafts</div>
                    </section>
                    <section className="email-inbox">
                        <Switch>
                            <Route component={EmailCompose} path="/mister-email/compose" />
                            <Route component={EmailDetails} path="/mister-email/:emailId" />
                            <Route component={() => <EmailList emails={emails} removeEmail={this.removeEmail} onEmailClick={this.onEmailClick} onStarEmail={this.onStarEmail} />} path={'/mister-email'} />
                        </Switch>
                    </section>
                </main>
            </section>
        );
    }
}
