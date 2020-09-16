import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const animationTiming ={
    enter:400,
    exit:1000 //daca vrem sa acceleram sau sa franam ceva
};
const modal = (props) =>{
    return (
        <CSSTransition 
            mountOnEnter
            unmountOnExit
            in={props.show}      
            timeout={animationTiming}
            classNames={{
                enter:'',
                enterActive:'ModalOpen',  
                exit:'',
                exitActive:'ModalClosed',        
            }}>  
                    <div className={"Modal"}>
                        <h1>A Modal</h1>
                        <button className={'Button'}  onClick={props.closed}>Dismiss {props.show} </button>
                    </div>                                                            
        </CSSTransition>  
    ); 
};

export default modal;