
export function NotePreview({ note,removeNote }) {
    console.log('note', note.id)
    return (
        <article className="note-preview">
                <ul className= "clean-list">
                   <li>note</li> 
                   <li>{note.type}</li> 
                   <li>{note.isPind}</li>
                   <li>{note.info.txt}</li>
                   <button onClick={()=> removeNote(note.id)}></button>
                </ul>
        </article>
    )
}