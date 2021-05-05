export function NoteVideo({ note}) {
    return <div style={note.style} className="note-video">
        <iframe  width="300" height="240" src={note.info.url} frameBorder="0" allowFullScreen></iframe>
        <h2 >{note.info.title}</h2>
        {/* <img src="" image sign /> */}
    </div>
}