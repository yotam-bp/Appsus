import { emailService } from '../services/email.service.js'
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
            })
    }

    render() {
        const { emails, filterBy } = this.state
        if (!emails) return <div>Loading...</div>

        return (
            <section>
                <React.Fragment>
                <EmailFilter onSetFilter={this.onSetFilter} />
                {/* <Route component={EmailCompose} path="/compose" /> */}
                <EmailList emails={emails} removeEmail={this.removeEmail} toggleIsRead={this.toggleIsRead} />
                </React.Fragment>

            </section>
        )
    }
}