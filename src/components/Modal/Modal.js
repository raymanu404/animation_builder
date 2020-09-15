import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const modal = (props) =>{
   
    return (
        <Transition 
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={1000}>
            {
                state =>{

                    let cssClasses = ["Modal",
                    state === "entering" 
                       ? "ModalOpened"
                       : state === "exiting"  ? "ModalClosed" : null
                       ];
                       console.log(state); 
                       return (
                            <div className={cssClasses.join(' ')}>
                                <h1>A Modal</h1>
                                <button className={'Button'} onClick={props.closed}>Dismiss</button>
                            </div>
                       ); 
                            
                }
               
            }
        </Transition>  
    ); 
};

export default modal;