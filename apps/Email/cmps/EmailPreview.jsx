const { Link } = ReactRouterDOM
export function EmailPreview({ email, removeEmail, toggleIsRead }) {
    const emailToUpdate = email;
    return (
        < article className="email-inbox-mail">
            <section className="email-details">
            < Link to={`/mister-email/${email.id}`}>
                <h3 className={email.isRead? 'read': 'unread'}>{email.subject}</h3>
        </Link >
                <p>{email.body}</p>
                <span>{email.sentAt}</span>
            </section>
            <section className="email-btns">
                <button onClick={()=> removeEmail(email.id)}>x</button>
                <button onClick={()=> toggleIsRead(emailToUpdate)}>📩</button>
            </section>
        </article >
    )
}

