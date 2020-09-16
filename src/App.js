import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const animationTiming ={
  enter:400,
  exit:1000 //daca vrem sa acceleram sau sa franam ceva
};
class App extends Component {
  state = {
    show:false,
    showBlock:false,
  }

  ModalOpened = () =>{
    this.setState({
      show:true,
     
    });
  }
  ModalClosed = () =>{
    this.setState({
      show:false,
    });
  }
 
  render() {
    return (
      <div className="App">     
        <h1>React Animations</h1>
        <button className="Button" onClick={()=>this.setState((prevstate)=>({showBlock:!prevstate.showBlock}))} >Toggle</button> <br />
        <CSSTransition 
          in={this.state.showBlock} 
          timeout={animationTiming} 
          mountOnEnter
          unmountOnExit
          onEnter={()=>console.log("onEnter")} 
          onEntering={()=>console.log("onEntering")} 
          onEntered={()=>console.log("onEntered")} 
          onExit={()=>console.log("onExit")} 
          onExiting={()=>console.log("onExiting")} 
          onExited={()=>console.log("onExited")} 
          classNames={{enter:'',enterActive:'ModalOpen',exit:'',exitActive:'ModalClosed'}}
          >       
              <div style={{
                backgroundColor:"green",
                margin:"auto",
                height:100,
                width:100,  
                transition:'opacity 1s ease-out',     
              }}></div>
                            
        </CSSTransition>
    
        <Modal closed={this.ModalClosed}  show={this.state.show} />
        {this.state.show ? <Backdrop show /> : null }
        <button className="Button" onClick ={this.ModalOpened} >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
