import { noteService } from '../services/note.service.js'

export class NoteAdd extends React.Component {

    state = {
        note: {
            type: 'NoteText',
            isPinned:true,
            info: {}
        },
        inputText: '',
        placeholder: 'Add some things',
    }

    refInput = React.createRef();

    onChooseType = (noteType) => {
        const note = { ...this.state.note }
        let placeholder;
        note.type = noteType;
        switch (noteType) {
            case 'NoteText':
                placeholder = 'Write a note'
                break;
            case 'NoteImg':
                placeholder = 'Enter image URL...'
                break;
            case 'NoteVideo':
                placeholder = 'Enters video URL...'
                break;
            case 'NoteTodos':
                placeholder = 'Enter comma separated list...'
                break;
        }
        this.setState({ note, inputText: '', placeholder })
    }
    
    onChangeType = (ev) => {
        ev.preventDefault();
        const note = { ...this.state.note };
        const inputText = ev.target.value;
        switch (note.type) {
            case 'NoteText':
                note.info = { txt: inputText }
                break;
            case 'NoteImg':
            case 'NoteVideo':
                note.info = { url: inputText, title: '' }
                break;
            case 'NoteTodos':
                const todosTxt = inputText.split(',')
                const todos = todosTxt.map(todoTxt => { return { txt: todoTxt } })
                note.info = { todos };
                break;
        }
        this.setState({note, inputText});
    };

    saveNote = (ev) => {
         ev.preventDefault();
        const { note } = this.state
        if (!this.state.inputText) return
        if (note.type === 'NoteVideo') {
            note.info.url = note.info.url.replace('watch?v=', 'embed/');
        }
        noteService.save(note)
            .then(note => {
                this.props.notes()
                this.setState({
                    note: {
                        isPinned:true,
                        type: note.type,
                        info: {}
                    },
                    inputText: ''
                })
            })
            console.log(note)
    };

    render() {
        const { note, inputText, placeholder } = this.state
        return (
            <form className="add-note" onSubmit={this.saveNote}>
                <input value={inputText} name="inputText" ref={this.refInput}
                   type="text"  placeholder={placeholder}  
                    onChange={this.onChangeType} />
                    <div>
                        <button type="button" className="1" onClick={() => { this.onChooseType('NoteText') }}>A</button>
                        <button type="button" className="2" onClick={() => { this.onChooseType('NoteTodos') }}>⇶</button>
                        <button type="button" className="3" onClick={() => { this.onChooseType('NoteImg') }}>📷</button>
                        <button type="button" className="4" onClick={() => { this.onChooseType('NoteVideo') }}>🎥</button>

                    </div>
            </form>
        )
    }


}

// 

