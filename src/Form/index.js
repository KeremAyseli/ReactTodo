import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Alert} from 'react-bootstrap';
function NoteInput({ noteContacs, contacts }) {
    const [notesList, setNotesList] = useState({ note: "", id: 0 });

    const OnChangeInput = (e) => {
        e.preventDefault();
        setNotesList({ ...notesList, [e.target.name]: e.target.value, id: contacts.length + new Date().getSeconds() });

    }
    const OnNoteSubmit = (e) => {
        e.preventDefault();
        if (notesList.note !== '') {
            noteContacs([...contacts, notesList]);
            setNotesList({ note: "", id: 0 });
        }
        else {
            alert("please enter note");
        }
    }
    return (
        <form onSubmit={OnNoteSubmit}>
            <div >
                <div>
                    <input name="note" type="text" id="noteInput" placeholder="Enter note here..." onChange={OnChangeInput} value={notesList.note} />
                </div>

                <Button onClick={OnNoteSubmit}>Not ekle</Button>
            </div>
        </form>
    );
}


export default NoteInput;