
export function NotePreview({ note, removeNote, styleNote,togglePinNote }) {
    const colors = ['DarkSeaGreen', 'CornflowerBlue', 'LightSlateGray', 'LemonChiffon']
    return <article className="note-preview" >
        <div className="manage-notes flex ">
            <i className="fas fa-thumbtack" onClick={() => togglePinNote(note)}></i>
            <i className="far fa-trash-alt" onClick={() => removeNote(note.id)}></i>
            <div className="change-color"><i className="fas fa-palette"></i>
                {/* <button onMouseMove={()=> styleNote(note.id)}>bgc</button> */}
                <div className="color-palette flex">
                    {colors.map((color, idx) =>
                        <div className={`circle single-color-${color}`} key={idx} onClick={() => { styleNote(note.id, color) }}></div>)}
                </div>
            </div>
        </div>
    </article>

}
