
export function NotePreview({ note, removeNote, styleNote }) {
    const colors = ['snow', 'grey', 'green', 'blue']
    return <article className="note-preview" >
        <ul >
            <li>note</li>
            <button onClick={() => removeNote(note.id)}>X</button>
            <div className="change-color">
                {/* <button onMouseMove={()=> styleNote(note.id)}>bgc</button> */}
                <div className="color-picker">
                    {colors.map((color, idx) =>
                        <button key={idx} onClick={() => { styleNote(note.id, color) }}>C</button>)}
                </div>
            </div>
        </ul>
    </article>

}