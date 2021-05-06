const { Link } = ReactRouterDOM
import { emailService } from '../services/email.service.js'



export class EmailCompose extends React.Component {
    state = {
        to: 'Yotam',
        cc: "",
        subject: 'Apsus',
        body: 'I succeeded'
    }

    // componentDidMount() {
    //     this.loadBooks()
    // }

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




    render() {
        console.log('here');
        const { to, cc, subject, body } = this.state;
        if (!this.state) return <div>Loading...</div>
        return (
            <section className="email-compose">
                <Link to={'/mister-email'}> <div>Back</div></Link>
                <form className="email-compose-form">
                    <span>To: {to}</span>
                    <span>Cc: {cc}</span>
                    <h3>Subject: {subject}</h3>
                    <p>{body}</p>
                </form>
            </section>
        )
    }
}