export function NoteImg({ note, }) {
    return (
        <div style={note.style} className="note-img">
            <img src={note.info.url} alt="img" />
            <h4 >{note.info.title}</h4>
            {/* <img src="" image sign /> */}
        </div>
    )
}