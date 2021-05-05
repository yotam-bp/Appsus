import { noteService } from "./services/note.service.js";
import { NoteList } from './cmps/NoteList.jsx'


export class Notes extends React.Component {
    
    state = {
        notes: [],
        filterBy: null,
    }
    
    componentDidMount() {
        this.loadNotes()
    }
    
    loadNotes = () => {
        noteService.query()
        .then(notes => {
            this.setState({ notes })
            console.log(this.state.notes);
        })
        }
        
        addNote = (note) => {
            // if (!note) return;
        noteService.newNote(Note)
        .then(notes => {
            this.setState({ notes })
        })
    }

    removeNote = (noteId) => {
        noteService.deleteNote(noteId)
        .then(notes => {
            this.setState({ notes })
        })
    }
    
    styleNote = (noteId, color) => {
        noteService.updateColor(noteId, color)
        .then(notes => {
                this.setState({ notes })
            })
        }
        
        copyNote = (note, ev) => {
        ev.stopPropagation();
        noteService.copyNote(note)
        .then(notes => {
            this.setState({ notes })
        })
    }
    
    getNoteType(type) {
        switch (type) {
            case 'NoteTxt': {
                return 'txt'
            }
            case 'NoteTodos': {
                return 'todos'
            }
            case 'NoteImg':
                case 'NoteAudio':
                    case 'NoteVideo': {
                        return 'url'
            }
        }
    }
    
    render() {
        const { notes } = this.state
        if(!notes) return <div>Load</div>
        return (
            <section>
                <h1>This is Notes</h1>
                <NoteList notes={notes} removeNote={this.removeNote} styleNote={this.styleNote}  />
            </section>
        )
    }
}

