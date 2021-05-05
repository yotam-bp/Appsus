import { emailService } from '../services/email.service.js'
import { eventBusService } from '../../../services/eventBusService.js'
// import { EmailFilter } from './EmailFilter.jsx'
// import { EmailCompose } from './EmailCompose.jsx'
import { EmailList } from './EmailList.jsx'
import { EmailFilter } from './EmailFilter.jsx';

import { Loader } from '../../../cmps/Loader.jsx'



export class EmailApp extends React.Component {
    state = {
        emails: [],
        filterBy: null
    }

    componentDidMount() {
        this.loadEmails()

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

    render() {
        const { emails, filterBy } = this.state
        if (!emails) return <div>Loading...</div>

        return (
            <section>
                <EmailFilter onSetFilter={this.onSetFilter} />
                <section>
                    <EmailList emails={emails} removeEmail={this.removeEmail} toggleIsRead={this.toggleIsRead} />
                </section>
                {/* <Route component={EmailCompose} path="/compose" /> */}
            </section>
        )
    }
}