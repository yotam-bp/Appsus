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