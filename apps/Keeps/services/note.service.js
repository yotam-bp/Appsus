import { storageService } from "../../../services/storage.service.js";

export const noteService = {
    query,
    getNoteById,

}

const KEY = 'notes';
var gNotes = [{
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];
// _createNotes();

// function _createNotes() {
//     gNotes = storageService.loadFromStorage(KEY);
//     if (!gNotes || !gNotes.length) {
//         gNotes = _getDemoNotes()
//         _saveNotesToStorage();
//     }
// }
function query() {
    return Promise.resolve(gNotes);
}

function getNoteById(noteId) {
    var note = storageService.loadFromStorage('notes').find(note => note.id === noteId)
    return Promise.resolve(note)
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