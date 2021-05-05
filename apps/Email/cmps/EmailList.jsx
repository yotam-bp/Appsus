import {EmailPreview} from './EmailPreview.jsx'

export function EmailList({ emails, removeEmail, toggleIsRead}) {
    if (!emails) return <div>No emails to display</div>
    return (
        <div className="email-list">
            {emails.map(email => {
                return <EmailPreview email={email} key={email.id} removeEmail={removeEmail} toggleIsRead={toggleIsRead}/>
            })}
        </div>
    )
}