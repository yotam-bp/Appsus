import { NotePreview } from './NotePreview.jsx'
export function NoteList({ notes }) {
    if (!notes.length) return <div>No Notes</div>
    return (
        <div>
            {notes.map(note => {
            //    console.log(note);
                return <NotePreview key={note.id} note={note} />

            })}
        </div>

    );
}