export function NoteText({ note }) {
    return (
        <div style={note.style} className="note-text" contentEditable suppressContentEditableWarning={true} >
            <p>{note.info.txt}</p>
            {/* <img src="" image sign /> */}
        </div>
    )
}