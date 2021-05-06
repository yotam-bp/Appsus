
export function NotePreview({ note, removeNote, styleNote,togglePinNote }) {
    const colors = ['snow', 'grey', 'green', 'blue']
    return <article className="note-preview" >
        <div >
            
            <button onClick={() => togglePinNote(note)}>^</button>
            <button onClick={() => removeNote(note.id)}>X</button>
            <div className="change-color">
                {/* <button onMouseMove={()=> styleNote(note.id)}>bgc</button> */}
                <div className="color-picker">
                    {colors.map((color, idx) =>
                        <button key={idx} onClick={() => { styleNote(note.id, color) }}>C</button>)}
                </div>
            </div>
        </div>
    </article>

}