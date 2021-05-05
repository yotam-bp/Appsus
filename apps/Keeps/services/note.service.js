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
var gNotes = [
    {
        id: utilService.makeId(),
        type: "NoteVideo",
        info: {
            url: "https://www.youtube.com/embed/Q_ReXuz3xww",
            title:"Day Dream"
            
        },
        style:{
            backgroundColor: "grey"
        }
    },
    {
    id: utilService.makeId(),
    type: "NoteText",
    isPinned: true,
    info: {
        txt: "Fullstack Me Baby!"
    },
    style:{
        backgroundColor: "purple"
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
        backgroundColor: "yellow"
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
},

{
    id: utilService.makeId(),
    type: "NoteVideo",
    info: {
        url: "https://www.youtube.com/embed/UjcWqV-_l34",
        title:"yalla haifa"
        
    },
    style:{
        backgroundColor: "green"
    }
},
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
    _saveNotesToStorage()
    return Promise.resolve(gNotes)
}

function save(note) {
    return note.id ? _update(note) : _add(note);
}

function _add(note) {
    note.id = utilService.makeId();
    gNotes.unshift(note)
    _saveNotesToStorage();
    return Promise.resolve(note)
}

// function _update(note) {
//     const noteToUpdate = {...note};
//     const notesCopy = [...gNotes];
//     const noteIdx = notesCopy.findIndex(note => note.id === noteToUpdate.id);
//     notesCopy[noteIdx] = noteToUpdate;
//     gNotes = notesCopy;
//     _saveNotesToStorage();
//     return Promise.resolve(note)
// }
// function _add(noteToAdd,addText) {
//     const note = _createNote(noteToAdd.type, noteToAdd.info,addText )
//      gNotes.unshift(note)
//     _saveNotesToStorage();
//      return Promise.resolve(note)
// }

function _createNote(type,info,text) {
    // if (!speed) speed = utilService.getRandomIntInclusive(1, 200)
    return {
        id: utilService.makeId(),
        type,
        info, 
    }
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