export function NoteText({ note }) {
    console.log(note.info.text);
    return (
        <div style={note.style} className="note-text" >
            <p>{note.info.txt}</p>
            {/* <img src="" image sign /> */}
        </div>
    )
}