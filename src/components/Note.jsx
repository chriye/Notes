import React, { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import Detail from './Detail';



function Note(props) {
    const [open, setOpen] = useState(false);
    
    function clicked(){
        setOpen(true);
    }
    function modified(input){
        return (input.length > 20 ? input.slice(0, 20) : input);
    }

    return (
        <div>
            <div className="note_box" onClick={clicked}>
            {props.index}
                <h3>{modified(props.title)}</h3>
                <p>{modified(props.content)}</p>
                <div className="time">
                    <span><FaRegTrashAlt /></span>
                    {props.time}
                </div>
            </div>
            {open ? <Detail title={props.title} content={props.content} open={open} setOpen={setOpen} /> : null}
        </div>
    );
}

export default Note;
