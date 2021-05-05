import { noteService } from '../services/note.service/js'

export class NoteAdd extends React.Component {

    state = { 
            note: {
                type: 'NoteText',
                info: {}
            },
            inputText: '',
            placeholder: 'Add some things', 
    }

    refInput = React.createRef();




    saveNote = (ev) => {
        if (ev) ev.preventDefault();
        const { note, inputText } = this.state
        console.log(note);
        if (!this.state.inputText) return
        if (note.type === 'NoteVideo') {
            note.info.url = note.info.url.replace('watch?v=', 'embed/');
        }
        noteService.save(note,inputText)
            .then(note => {
                this.setState({
                    note: {
                        type: note.type,
                        info: {}
                    },
                    inputText: ''
                })

            })

    };

    render() {
       
        return (
          <form className="add-note" onSubmit={this.saveNote}>
              <input value={inputText} ref={this.refInput}
                        placeholder={placeholder} type="text" name="inputText"
                        onChange={} />
              <button>submit</button>
          </form>
        )
      }


}

// 

