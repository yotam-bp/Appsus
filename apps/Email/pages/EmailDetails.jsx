const { Link } = ReactRouterDOM
import { utilService } from '../../../services/util.service.js'
import { emailService } from '../services/email.service.js'



export class EmailDetails extends React.Component {
    state = {
        email: {},
    }

    componentDidMount() {
        this.loadEmails()

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.emailId !== this.props.match.params.emailId) {
            this.loadEmails()
            // this.state.email.isRead = true;
        }
    }




    loadEmails() {
        const id = this.props.match.params.emailId
        emailService.getEmaiById(id).then(email => {
            if (!email) return this.props.history.push('/')
            this.setState({ email })
        })
    }



    removeEmail = () => {
        emailService.deleteEmail(this.state.email.id)
            .then(emails => {
                this.props.history.push('/mister-email')
                this.setState({ emails })
            })
    }

    render() {
        const { email } = this.state;
        const date = utilService.formatTimestamp(+email.sentAt)+ ''
        if (!email) return <div>Loading...</div>
        return (
            <section className="email-details">
                <div className="email-details-btns">
                    <Link to={'/mister-email'} className="fas fa-arrow-left"></Link>
                    <i onClick={this.removeEmail} className="far fa-trash-alt"></i>
                </div>
                <h3>{email.subject}</h3>
                <h4>{email.senderName} ( <span>{email.senderEmail}</span> ) </h4>
                <h5>{date}</h5>
                <p>{email.body}</p>
            </section >
        )
    }
}