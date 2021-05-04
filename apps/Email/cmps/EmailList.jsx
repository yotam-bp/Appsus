import {EmailPreview} from './EmailPreview.jsx'

export function EmailList({ emails }) {
    return <div className="email-list">
        <h1>here in email list</h1>
        {emails.map(email => {
            return <EmailPreview email={email} key={email.id} />
        })}
    </div>

}