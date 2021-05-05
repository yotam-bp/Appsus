import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js"
export const noteService = {
    query,
    getNoteById,
    deleteNote,
    newNote,
    updateColor
}

const KEY = 'notes';
var gNotes = [{
    id: utilService.makeId(),
    type: "NoteText",
    isPinned: true,
    info: {
        txt: "Fullstack Me Baby!"
    },
    style:{
        backgroundColor: "green"
    }
},
{
    id: utilService.makeId(),
    type: "NoteImg",
    info: {
        url: "https://thumbs.dreamstime.com/t/cute-cat-myopia-glasses-squinting-close-up-funny-portrait-blue-wall-background-cute-cat-myopia-glasses-squinting-close-up-100811854.jpg",
        title: "Me playing Mi"
    },
    style: {
        backgroundColor: "white"
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
        
    },
    style:{
        backgroundColor: "red"
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
    return Promise.resolve(gNotes)
}

function newNote(noteToAdd) {
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

function updateColor(noteId, color) {
    const noteToUpdate = gNotes.find(note => note.id === noteId)
    noteToUpdate.style = {backgroundColor:color}
    console.log('noteToUpdate', noteToUpdate)
    _saveNotesToStorage()
    return Promise.resolve(gNotes)

}

// function _createCar(vendor, speed) {
// 
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