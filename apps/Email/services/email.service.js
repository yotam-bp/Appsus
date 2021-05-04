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

// function deleteCar(carId) {
//     var carIdx = gCars.findIndex(function (car) {
//         return carId === car.id
//     })
//     gCars.splice(carIdx, 1)
//     _saveCarsToStorage();

//     return Promise.resolve()
// }
// function saveCar(car) {
//     return car.id ? _updateCar(car) : _addCar(car)
// }
// function _addCar(carToAdd) {
//     var car = _createCar(carToAdd.vendor, carToAdd.speed)
//     gCars.unshift(car)
//     _saveCarsToStorage();
//     return Promise.resolve(car)
// }

// function _updateCar(carToUpdate) {
//     var carIdx = gCars.findIndex(function (car) {
//         return car.id === carToUpdate.id;
//     })
//     gCars.splice(carIdx, 1, carToUpdate)
//     _saveCarsToStorage();
//     return Promise.resolve(carToUpdate)
// }

// function getNextCarId(carId) {
//     const carIdx = gCars.findIndex(car => car.id === carId)
//     var nextCarIdx = carIdx + 1
//     nextCarIdx = nextCarIdx === gCars.length ? 0 : nextCarIdx
//     return gCars[nextCarIdx].id
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