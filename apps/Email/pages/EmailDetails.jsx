import { emailService } from '../services/email.service.js'

export class EmailDetails extends React.Component {
    state = {
        email: null,
    }

    componentDidMount() {
        this.loadBooks()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.emailId !== this.props.match.params.emailId) {
          this.loadEmails()
        }
      }

    loadBooks() {
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
        if (!email) return <div>Loading...</div>
        return (
            <section className="email-details">
                <h3>{email.subject}</h3>
                <h5>{email.sentAt}</h5>
                <p>{email.body}</p>
                <button onClick={this.removeEmail}>x</button>
            </section>
        )
    }
}