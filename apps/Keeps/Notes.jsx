import {noteService} from "./services/note.service.js";

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
            console.log(notes);
            })
    }
    render(){

        return (
            <section>
                <h1>This is Notes</h1>
            </section>
        )
    }
}