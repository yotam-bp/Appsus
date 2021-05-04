import {noteService} from "./services/note.service.js";
import { NoteList } from './cmps/NoteList.jsx'


export class Notes extends React.Component{

    state = {
        notes : []
    }

        componentDidMount() {
        this.loadNotes()
    }
    
    loadNotes = () => {
        noteService.query()
        .then(notes => {
            this.setState({ notes })
            })
    }
    render(){
        const { notes } = this.state
        return (
            <section>
                <h1>This is Notes</h1>
                <NoteList notes={notes}/>
            </section>
        )
    }
}

