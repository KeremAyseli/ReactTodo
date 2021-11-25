import { useState } from 'react';
function List({ noteList ,noteContacs }) {
    const removeNote = (id) => {
        noteList=noteList.filter(note => note.id !== id);
        console.log(noteList);
        noteContacs(noteList);
    }
    return (
        console.log(noteList),
        <div>
            <ul>
                {noteList.map((notes, index) => 
                    <li onClick={()=>{
                        removeNote(notes.id);
                    }} key={index}>{notes.note}</li>
                
                )}
            </ul>
        </div>

    );
}

export default List;