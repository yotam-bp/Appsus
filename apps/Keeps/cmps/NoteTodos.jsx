export function NoteTodos({ note }) {
    return (
        <div className="note-todos" style={note.style}  contentEditable suppressContentEditableWarning={true}>
            {note.info.todos.map((todo, idx) =>
                <div key={idx} className="" >
                    <p >{todo.txt}</p>
                    {/* <img src="" complete sign alt=""/> */} 
                </div>
                )}
            {/* <img src="" img sign /> */}
        </div>
    )
}