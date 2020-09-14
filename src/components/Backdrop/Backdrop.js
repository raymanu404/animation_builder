import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    let cssClasses = ['Backdrop', props.show ? 'BackdropOpened': 'BackdropClosed'];
    
    return (
        <div className={cssClasses.join(' ')} ></div>
    );
    
};

export default backdrop;