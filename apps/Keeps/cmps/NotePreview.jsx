
export function NotePreview({ note }) {
    console.log('note', note)
    return (
        <article className="note preview">
                <ul>
                   <li>note</li> 
                   <li>{note.type}</li> 
                   <li>{note.isPind}</li>
                   <li>{note.info.txt}</li>
                   <button onClick={}></button>
                </ul>
        </article>
    )
}