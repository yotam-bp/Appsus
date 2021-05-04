import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js"
export const noteService = {
    query,
    getNoteById,
    deleteNote
}

const KEY = 'notes';
var gNotes = [{
    id: utilService.makeId(),
    type: "NoteText",
    isPinned: true,
    info: {
        txt: "Fullstack Me Baby!"
    }
},
{
    id: utilService.makeId(),
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
    id: utilService.makeId(),
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
    var note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes);
}

function deleteNote(noteId) {
    var noteIdx = gNotes.findIndex(function (note) {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    _saveNotesToStorage();
    return Promise.resolve()
}

function _addNote(noteToAdd) {
    var note = _createNote(noteToAdd.vendor, carToAdd.speed)
    gCars.unshift(car)
    _saveCarsToStorage();
    return Promise.resolve(car)
}

function _updateNote(noteToUpdate) {
    var noteIdx = gNotes.findIndex(function (note) {
        return note.id === noteToUpdate.id;
    })
    gNotes.splice(noteIdx, 1, noteToUpdate)
    _saveNotesToStorage();
    return Promise.resolve(noteToUpdate)
}

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

// function saveCar(car) {
//     return car.id ? _updateCar(car) : _addCar(car)
// }