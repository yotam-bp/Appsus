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
            
    };

    render() {
        const { note, inputText, placeholder } = this.state
        return (
            <form className="add-note flex" onSubmit={this.saveNote}>
                <input value={inputText} name="inputText" ref={this.refInput}
                   type="text"  placeholder={placeholder}  
                    onChange={this.onChangeType} />
                    <div className="choose-type-buttons flex space-between">
                    <button className={`${(note.type === 'NoteText') && 'active'}`}  onClick={() => { this.onChooseType('NoteText') }}><i className="fas fa-font"></i></button>
                    <button className={`${(note.type === 'NoteTodos') && 'active'}`}  onClick={() => { this.onChooseType('NoteTodos') }}><i className="fas fa-list"></i></button>
                    <button className={`${(note.type === 'NoteImg') && 'active'}`} onClick={() => { this.onChooseType('NoteImg') }}><i className="fas fa-image"></i></button>
                    <button className={`${(note.type === 'NoteVideo') && 'active'}`}  onClick={() => { this.onChooseType('NoteVideo') }}><i className="fab fa-youtube"></i></button>
                    </div>
            </form>
        )
    }
}

//        <div className="choose-type-buttons flex space-between">
{/* <i class="fas fa-font"  onClick={() => { this.onChooseType('NoteText') }}></i>
<i class="fas fa-list" onClick={() => { this.onChooseType('NoteTodos') }}></i>
<i class="fas fa-image" onClick={() => { this.onChooseType('NoteImg') }}></i>
<i class="fab fa-youtube" onClick={() => { this.onChooseType('NoteVideo') }}></i>
</div> */}

