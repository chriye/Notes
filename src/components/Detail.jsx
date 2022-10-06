import React from 'react';
import { GrClose } from "react-icons/gr";

function Detail(props) {

    function updateForm(e) {
        const detailBox = document.getElementsByClassName('detailBox')[0];
        detailBox.remove();
        props.setOpen(false);
    }

    return (
        <div>
            <div className='detailBox'>
                <span onClick={updateForm}><GrClose /></span>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
            {props.open ? <div id="darker" /> : null}
        </div>
    );

}

export default Detail;