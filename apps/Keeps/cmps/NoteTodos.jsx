export function NoteTodos({ note }) {
    return (
        <div className="note-todos" style={note.style}  >
            {note.info.todos.map((todo, idx) =>
                <div key={idx} className="" >
                    <li contentEditable suppressContentEditableWarning={true}>{todo.txt}</li>
                    {/* <img src="" complete sign alt=""/> */} 
                </div>
                )}
            {/* <img src="" img sign /> */}
        </div>
    )
}