import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js"
export const noteService = {
    query,
    getNoteById,
    deleteNote,
    newNote,
    updateColor,
    save,
    togglePinned
}

const KEY = 'notes';
var gNotes = [
    {
        id: utilService.makeId(),
        type: "NoteVideo",
        isPinned: false,
        info: {
            url: "https://www.youtube.com/embed/Q_ReXuz3xww",
            title: "Day Dream"

        },
        style: {
            backgroundColor: "#fefbd8"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#4040a1"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://thumbs.dreamstime.com/t/cute-cat-myopia-glasses-squinting-close-up-funny-portrait-blue-wall-background-cute-cat-myopia-glasses-squinting-close-up-100811854.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#36486b"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]

        },
        style: {
            backgroundColor: "#fefbd8"
        }
    },

    {
        id: utilService.makeId(),
        type: "NoteVideo",
        isPinned: false,
        info: {
            url: "https://www.youtube.com/embed/UjcWqV-_l34",
            title: "yalla haifa"

        },
        style: {
            backgroundColor: "#618685"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteVideo",
        isPinned: true,
        info: {
            url: "https://www.youtube.com/embed/UjcWqV-_l34",
            title: "yalla haifa"

        },
        style: {
            backgroundColor: "Thistle"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: true,
        info: {
            url: "https://thumbs.dreamstime.com/t/cute-cat-myopia-glasses-squinting-close-up-funny-portrait-blue-wall-background-cute-cat-myopia-glasses-squinting-close-up-100811854.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#36486b"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "מנת היום: מרק קורקבנים"
        },
        style: {
            backgroundColor: "LightBlue"
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

function query(filterBy) {
    if (filterBy) {
        const filteredNotes = gNotes.filter(note => {
            return note.type === filterBy
        })
        return Promise.resolve(filteredNotes)
    }
    return Promise.resolve(gNotes)
}

// function query() {
//     return Promise.resolve(gNotes);
// }


function togglePinned(noteToUpdate) {
    var noteIdx = gNotes.findIndex(function (note) {
        return noteToUpdate.id === note.id
    });
    (!noteToUpdate.isPinned) ? (noteToUpdate.isPinned = true) : (noteToUpdate.isPinned = false);
    gNotes.splice(noteIdx, 1, noteToUpdate);
    _saveNotesToStorage();
    return Promise.resolve(gNotes)
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

function _update(noteToUpdate) {
    var noteIdx = gNotes.findIndex(function (note) {
        return note.id === noteToUpdate.id;
    })
    gNotes.splice(noteIdx, 1, noteToUpdate)
    _saveNotesToStorage();
    return Promise.resolve(noteToUpdate)
}

function updateColor(noteId, color) {
    const noteToUpdate = gNotes.find(note => note.id === noteId)
    noteToUpdate.style = { backgroundColor: color }
    _saveNotesToStorage()
    return Promise.resolve(gNotes)
}

function save(note) {

    return note.id ? _update(note) : _add(note);
}

function _add(note) {
    console.log('note', note)
    note.id = utilService.makeId();
    note.style.backgroundColor= "#36486b"
    gNotes.unshift(note)
    console.log(gNotes);
    _saveNotesToStorage();
    return Promise.resolve(note)
}



