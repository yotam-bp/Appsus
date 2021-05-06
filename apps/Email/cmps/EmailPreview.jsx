const { Link } = ReactRouterDOM
export function EmailPreview({ email, removeEmail, toggleIsRead }) {
    const emailToUpdate = email;
    return (
        < article className="email-inbox-mail">
            <section className="email-details">
                < Link to={`/mister-email/${email.id}`}>
                    <h3 className={email.isRead ? 'read' : 'unread'}>{email.subject}</h3>
                </Link >
                <h5>{email.senderName}</h5>
                <span>{email.senderEmail}</span>
                <p>{email.body}</p>
                <span>{email.sentAt}</span>
            </section>
            <section className="email-btns">
                <i onClick={() => removeEmail(email.id)} className="far fa-trash-alt"></i>
                <i onClick={() => toggleIsRead(emailToUpdate)} className={email.isRead ? 'far fa-envelope-open' : 'far fa-envelope'}></i>
            </section>
        </article >
    )
}


