export function NoteImg({ note }) {
    return (
        <div  className="note-img" style={note.style}>
            <img src={note.info.url} alt="img" />
            <h4 contentEditable suppressContentEditableWarning={true}>{note.info.title}</h4>
            {/* <img src="" image sign /> */}
        </div>
    )
}