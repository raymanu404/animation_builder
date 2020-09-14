import React from 'react';

import './Modal.css';

const modal = (props) =>{
    let cssClasses = ['Modal', props.show ? 'ModalOpened': 'ModalClosed'];
    return (
        <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className={'Button'} onClick={props.closed}>Dismiss</button>
        </div>
    );

  
};

export default modal;