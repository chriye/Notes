import React, { useState } from 'react';
import Header from './Header.jsx';
import Note from './Note';
import AddNote from './AddNotes.jsx';
import { FaRegStickyNote } from "react-icons/fa";


function App() {
    const [notes, setNotes] = useState([]);
    const [showBox, setShowBox] = useState(false);

    function updateNote(note){
        setNotes((previous) => [...previous, note]);
    }

    function iconClicked() {
        setShowBox(true);
    }
    
    function test(){
        console.log("I was clicked");
    }

    return (
        <div className="outer">
            <Header />
            {showBox ? <AddNote updateNote={updateNote} showBox={showBox} setShowBox={setShowBox} /> : null}
            {notes.map((box, index) => <Note key={index} title={box.title} content={box.content} time={box.time} index={index} />)}
            <FaRegStickyNote className="addIcon" onClick={iconClicked} />
            
        </div>
    );
}

export default App;

