import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const emailService = {
    query,
    deleteEmail,
    getEmaiById,
    updateIsRead
}

const KEY = 'Emails'

var gEmails = [{
        id: utilService.makeId(),
        senderName: 'Slack',
        senderEmail: 'no-reply-0D9GdbJ1m7FcauOUl0b3WU5F@slack.com',
        subject: 'Slack confirmation code: O7E-6GZ',
        body: 'Confirm your email address.',
        isRead: false,
        sentAt: utilService.formatTimestamp(1551133930594)
    },
    {
        id: utilService.makeId(),
        senderName: 'Puki Ben David',
        senderEmail: 'Pukiputz@walla.co.il',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: utilService.formatTimestamp(1551133930594)
    },
    {
        id: utilService.makeId(),
        senderName: 'Muki Harush',
        senderEmail: 'muki_the_king@hotmail.co.il',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: utilService.formatTimestamp(1551133930594)
    },
    {
        id: utilService.makeId(),
        senderName: 'Shoshana Damari',
        senderEmail: 'shoshid@gmail.com',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: utilService.formatTimestamp(1551133930594)
    },

]


function query(filterBy) {
    if (filterBy) {
        var { text } = filterBy
        const filteredEmails = gEmails.filter(email => {
            return (email.subject.toLowerCase().includes(text) || email.body.toLowerCase().includes(text))
        })
        return Promise.resolve(filteredEmails)
    }
    return Promise.resolve(gEmails)
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails);
}

function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(function(email) {
        return emailId === email.id
    })
    gEmails.splice(emailIdx, 1)
    _saveEmailsToStorage();
    return Promise.resolve(gEmails)
}

function updateIsRead(emailToUpdate) {
    var emailIdx = gEmails.findIndex(function(email) {
        return emailToUpdate.id === email.id
    })
    console.log('email to update ', emailToUpdate);
    // console.log('before change ', emailToUpdate.isRead);
    (!emailToUpdate.isRead) ? (emailToUpdate.isRead = true) : (emailToUpdate.isRead = false);
    // console.log('after change', emailToUpdate.isRead);
    gEmails.splice(emailIdx, 1, emailToUpdate)
    _saveEmailsToStorage();
    return Promise.resolve(gEmails)
}

function getEmaiById(emailId) {
    var email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

// function _updateIsRead(emailToUpdate) {
//     var emailIdx = gEmails.findIndex(function(email) {
//         return email.id === emailToUpdate.id;
//     })
//     const { isRead } = emailToUpdate;
//     (isRead) ? !isRead: isRead;
//     gEmails.splice(emailIdx, 1, emailToUpdate)
//     _saveEmailsToStorage();
//     return Promise.resolve(emailToUpdate)
// }


// 
// function saveCar(car) {
//     return car.id ? _updateCar(car) : _addCar(car)
// }
// function _addCar(carToAdd) {
//     var car = _createCar(carToAdd.vendor, carToAdd.speed)
//     gCars.unshift(car)
//     _saveCarsToStorage();
//     return Promise.resolve(car)
// }



// function _createCar(vendor, speed) {
//     if (!speed) speed = utilService.getRandomIntInclusive(1, 200)
//     return {
//         id: utilService.makeId(),
//         vendor,
//         speed,
//         desc: utilService.makeLorem(),
//         isBestSeller : Math.random() > 0.5
//     }
// }