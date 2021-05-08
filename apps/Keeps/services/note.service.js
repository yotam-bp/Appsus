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
            title: "My beautiful cat"
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
                { txt: "Don't do that", doneAt: null },
                { txt: "Ok do that", doneAt: null },
            ]

        },
        style: {
            backgroundColor: "Thistle"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: true,
        info: {
            label: "How was it:",
            todos: [
                { txt: "Replace the leash", doneAt: null },
                { txt: "Put some wax", doneAt: null },
                { txt: "Feed the pigeons ", doneAt: null },
                { txt: "Go surf!", doneAt: null }
            ]

        },
        style: {
            backgroundColor: "#fefbd8"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "How was it:",
            todos: [
                { txt: "Don't forget to add", doneAt: null },
                { txt: "Don't forget to commit", doneAt: null },
                { txt: "Don't forget to push", doneAt: null },
                { txt: "Burn it", doneAt: null },
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
            url: "https://www.youtube.com/embed/YVOrDgtDYQ4",
            title: "how to make perfect the coffee"

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
            url: "https://www.youtube.com/embed/wycjnCCgUes",
            title: "Thats True"

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
            url: "https://i.pinimg.com/564x/dc/c9/fb/dcc9fbbc05f59b241232a89953a3c607.jpg",
            title: "Print This poster"
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
    {
        id: utilService.makeId(),
        type: "NoteVideo",
        isPinned: true,
        info: {
            url: "https://www.youtube.com/embed/UjcWqV-_l34",
            title: " haifa"

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
            url: "https://www.youtube.com/embed/B-b-GiMdOug",
            title: "Asher F***ing Pacey"

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
            url: "https://i.pinimg.com/564x/95/f8/ff/95f8ffc6bf17d7519e8b0882e86a489c.jpg",
            title: "nice Quiver"
        },
        style: {
            backgroundColor: "#36486b"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        info: {
            txt: "נמיות בטמפורה על מצע מיונז"
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
    // note.style.backgroundColor= "#36486b"
    gNotes.unshift(note)
    console.log(gNotes);
    _saveNotesToStorage();
    return Promise.resolve(note)
}



