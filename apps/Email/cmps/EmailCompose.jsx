const { Link } = ReactRouterDOM
import { emailService } from '../services/email.service.js'



export class EmailCompose extends React.Component {
    state = {
        to: '',
        cc: '',
        subject: '',
        body: ''
    }

    // componentDidMount() {
    //     console.log('hi');
    // }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ [field]: value });
    }


    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.match.params.emailId !== this.props.match.params.emailId) {
    //         this.loadEmails()
    //     }
    // }

    // loadBooks() {
    //     const id = this.props.match.params.emailId
    //     emailService.getEmaiById(id).then(email => {
    //         if (!email) return this.props.history.push('/')
    //         this.setState({ email })
    //         console.log(this.state.email);
    //         this.state.email.isRead = true;

    //     })
    // }
    onSend = (ev) => {
        ev.preventDefault();
        emailService.sendEmail(this.state)
    }



    render() {
        const { to, cc, subject, body } = this.state;
        if (!this.state) return <div>Loading...</div>
        return (
            <section className="email-compose">
                <Link to={'/mister-email'} className="fas fa-arrow-left"></Link>

                <form className="email-compose-form" onSubmit={this.onSend}>
                    <label htmlFor="to">To:
                    <input value={to} type="text" name="to" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="cc">Cc: 
                    <input value={cc} type="text" name="cc" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="subject">Subject: 
                    <input value={subject} type="text" name="subject" onChange={this.handleChange} />
                    </label>
                    <textarea name="body" value={body} onChange={this.handleChange} />
                    <button>Send</button>
                </form>
            </section>
        )
    }
}
