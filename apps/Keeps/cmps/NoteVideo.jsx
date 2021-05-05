export function NoteVideo({ note}) {
    return <div style={note.style} className="note-video">
        <iframe  width="" height="" src={note.info.url}></iframe>
        <h2 >{note.info.title}</h2>
        {/* <img src="" image sign /> */}
    </div>
}