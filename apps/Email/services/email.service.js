import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const emailService = {
    query,
    saveEmails,
    getEmails
}

const gEmails = [{
        id: utilService.makeId(),
        subject: 'Slack confirmation code: O7E-6GZ',
        body: 'Confirm your email address.',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },

]

function query(filterBy) {
    if (filterBy) {
        var { subject, body, isRead, sentAt } = filterBy
        const filteredEmails = gEmails.filter(email => {
            return enail.subject.includes(email)
        })
        return Promise.resolve(filteredEmails)
    }
    return Promise.resolve(gEmails)
}

function saveEmails(emails) {
    storageService.saveToStorage('Emails', emails)
    return Promise.resolve()
}

function getEmails() {
    const emails = storageService.loadFromStorage('Emails')
    if (!emails) {
        return gEmails
    }
    return emails
}