import { NotePreview } from './NotePreview.jsx'
import { DynamicNoteCmp } from './DynamicNoteCmp.jsx'
export function NoteList({ notes, removeNote, styleNote, togglePinNote }) {
    if (!notes.length) return <div>No Notes</div>
    return (
        <div className="notes-list" >
            {notes.map(note => {
                return <section key={note.id} style={note.style} className="single-note">
                    <div >
                        <DynamicNoteCmp  note={note} />
                    </div>
                    <div >
                        <NotePreview  note={note} removeNote={removeNote} styleNote={styleNote} togglePinNote={togglePinNote} />
                    </div>
                </section>

            })}
        </div>

    );
}

