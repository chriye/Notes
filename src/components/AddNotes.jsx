import React, { useState } from 'react';
import { GrClose, GrAdd } from "react-icons/gr";

function AddNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
        time: ""
    });

    function addNote(event) {
        const { name, value } = event.target;
        setNote((previous) => {
            return {
                ...previous,
                [name]: value,
            };
        });
    }

    function getTime() {
        const time = new Date();
        return time.getFullYear() + "/" + time.getMonth() + "/" + time.getDate() + "/" + time.getHours() + ":" + time.getMinutes();
    }

    function updateForm(e) {
        const addingDiv = document.getElementsByClassName('addNotesBlock')[0];
        addingDiv.remove();
        props.setShowBox(false);
    }

    return (
        <div>
            <div className="addNotesBlock">
                <span onClick={updateForm}><GrClose /></span>
                <form>
                    <h2>Add a note</h2>
                    <div>
                        <input onChange={addNote} type="text" placeholder="Title" name="title" value={note.title} />
                    </div>
                    <div>
                        <textarea onChange={addNote} placeholder="Content" name="content" value={note.content} />
                    </div>
                    <button onClick={(event) => {
                        note.time = getTime();
                        props.updateNote(note);
                        setNote({ title: "", content: "" });
                        event.preventDefault();
                        props.setShowBox(false);
                    }}><GrAdd /></button>
                </form>
            </div>
            {props.showBox ? <div id="darker" /> : null}
        </div>
    );
}

export default AddNote;