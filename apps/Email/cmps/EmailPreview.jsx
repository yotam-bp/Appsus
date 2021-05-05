const { Link } = ReactRouterDOM
export function EmailPreview({ email }) {


    return (
        // < Link to={`/email/${email.id}`}>
        < article className="email-inbox-mail">
            <section className="email-details">
                <h3>{email.subject}</h3>
                <p>{email.body}</p>
                <span>{email.sentAt}</span>
            </section>
            <section className="email-btns">
                <button>x</button>
                <button>📩</button>
            </section>
        </article >
        // </Link >
    )
}

