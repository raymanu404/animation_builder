import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

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
        <Transition in={this.state.showBlock} timeout={700} mountOnEnter unmountOnExit >
          {
            state =>(
              <div style={{
                backgroundColor:"blue",
                margin:"auto",
                height:100,
                width:100,  
                transition:'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1,
              }}></div>
            )
          }
        
        </Transition>
        
        {this.state.show ?  <Modal closed={this.ModalClosed} show={this.state.show} /> : null} 
        {this.state.show ? <Backdrop show /> : null }
        <button className="Button" onClick ={this.ModalOpened} >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
