import {useState} from "react";
import './Notes.css';

function Notes() {
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState({});
    const [update, setUpdate] = useState('');

    const handleChange = (e) => {
        setInputValue({ ...inputValue, [e.target.id]: e.target.value });
    };

    const getNotes = async () => {
        try {
            const response = await fetch('/api/v1/notes');
            const json = await response.json();
            setNotes(json);
            setUpdate('Notes has been fetched');

        } catch (error) {
            console.log("error on get", error);
        }
    };

    const addNotes = async () => {
        try {
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type':
                        'application/json;charset=utf-8'
                },
                body: JSON.stringify(inputValue),
            }
            const response = await fetch('/api/v1/notes',options);

            setNotes(response.data);
            setUpdate('Notes has been added');

        } catch (error) {
            console.log("error on post", error);
        }
    }

    const deleteNote = async (notesId) => {
        let options = {
            method: 'DELETE',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
        }
        try {
            const response = await fetch(`/api/v1/notes/${notesId}`, options);
            setUpdate('Note have been deleted. Click Get Notes to see');
        } catch (error) {
            console.log("error", error);
        }
    };

    const deleteAll = async (notesId) => {
        let options = {
            method: 'DELETE',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
        }
        try {
            const response = await fetch('/api/v1/notes', options);
            setUpdate('All Notes have been deleted.');
        } catch (error) {
            console.log("error", error);
        }
    };


    return (
        <div className="App">
            <header className="App-header">
                <button onClick={getNotes}>Get Notes</button>
                {notes && notes.map((note) => (
                    <div className='notes'>
                        <p> Name: {note.notesDescription}</p>
                        <button onClick={() => deleteNote(note._id)}>Delete</button>
                    </div>
                ))}

                <div className='add-notes'>
                    <button onClick={addNotes}>Add Notes</button>
                    <div>
                        <label htmlFor="notesDescription">New Note</label>
                        <input
                            type="text"
                            id="notesDescription"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button onClick={deleteAll}>Delete All Notes</button>

                {update}
            </header>
        </div>
    );
}

export default Notes;
