import React from 'react';
import './MemorygameOver.css';

const closeHandler = () => {
    window.location.reload()
}

const MemorygameOver = (props) => {
    return (
        <div id='overlay'>
            <div className='gameoverbox'>
                <h3>Completed! You Matched em all! </h3>
                <p>..with {props.missmatches} missmatches! =) </p>
                <button id='closeButton' onClick={closeHandler}> Close </button>
            </div>
        </div>

    )
}

export default MemorygameOver;