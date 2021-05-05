import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const emailService = {
    query,
    deleteEmail,
    getEmaiById
}

var gEmails = [{
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

function query() {
    return Promise.resolve(gEmails)

    // var { isRead, subject, body } = filterBy
    // const filteredEmails = gEmails.filter(email => {
    //     return (email.subject.includes(subject) ||
    //             email.body.includes(body)) &&
    //         email.isRead === isRead
    // })
    // return Promise.resolve(filteredEmails)
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
    return Promise.resolve()
}

function getEmaiById(emailId) {
    var email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function _updateIsRead(emailToUpdate) {
    var emailIdx = gEmails.findIndex(function(email) {
        return email.id === emailToUpdate.id;
    })
    const { isRead } = emailToUpdate;
    (isRead) ? !isRead: isRead;
    gEmails.splice(emailIdx, 1, emailToUpdate)
    _saveEmailsToStorage();
    return Promise.resolve(emailToUpdate)
}


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