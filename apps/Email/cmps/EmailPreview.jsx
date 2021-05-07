const { Link } = ReactRouterDOM
export function EmailPreview({ email, removeEmail, onEmailClick, onStarEmail }) {

    const emailToUpdate = email;
    return (
        <article className={email.isRead ? 'read email-inbox-mail pointer' : 'unread email-inbox-mail pointer'}>
            
            <section onClick={() => { onStarEmail(emailToUpdate) }} className="email-star">
                <i className={email.isStarred ? 'starred fas fa-star' : 'fas fa-star'}></i>
            </section>
            <section onClick={() => {
                onEmailClick(emailToUpdate)
                // this.props.history.push(`/mister-email/${email.id}`)
            }} className="email-sub-body-container">
                <h5>{email.senderName}</h5>
                <section className="email-sub-body">
                    <h3 className={email.isRead ? 'read' : 'unread'}>{email.subject}</h3>
                </section>
            </section>
            <section className="email-btns">
                <i onClick={() => removeEmail(email.id)} className="far fa-trash-alt"></i>
                <i className={email.isRead ? 'far fa-envelope-open' : 'far fa-envelope'}></i>
            </section>
        </article >
    )
}

