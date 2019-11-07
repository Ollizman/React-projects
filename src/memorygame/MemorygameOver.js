import React from 'react';
import './MemorygameOver.css';

const closeHandler = () => {
    window.location.reload()
}

const MemorygameOver = () => {
    return (
<div id='overlay'>
    <div className='gameoverbox'>
        <p>Game over!! You remembered 'em All!! </p>
        <button id='closeButton' onClick={closeHandler}> Close </button>
    </div>
</div>

    )
}

export default MemorygameOver;