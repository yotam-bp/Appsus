const { Link } = ReactRouterDOM
export function EmailPreview({ email }) {


    return ( 
        // < Link to={`/email/${email.id}`}>
        < article >
        <h1>here in email preview</h1>
            <h3>{email.subject}</h3>
            <p>{email.body}</p>
            <span>{email.sentAt}</span>
        </article >
    // </Link >
    )
}

