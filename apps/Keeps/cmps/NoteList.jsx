import { NotePreview } from './NotePreview.jsx'
import { DynamicNoteCmp } from './DynamicNoteCmp.jsx'
export function NoteList({ notes, removeNote, styleNote, togglePinNote }) {
    console.log(notes);
    if (!notes.length) return <div>No Notes</div>
    return (
        <div className="notes-list flex" >
            {notes.map(note => {
                //    console.log(note);
                return <section style={note.style} className="single-note">
                    <div>
                        <DynamicNoteCmp key={note.id} note={note}  />
                    </div>
                    <div>
                        <NotePreview key={note.id} note={note} removeNote={removeNote} styleNote={styleNote} togglePinNote={togglePinNote} />
                    </div>
                </section>

            })}
        </div>

    );
}