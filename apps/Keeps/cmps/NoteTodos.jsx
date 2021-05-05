export function NoteTodos({ note }) {
    return (
        <div style={note.style} className="note-todos">
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