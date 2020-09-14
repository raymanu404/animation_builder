import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    show:false,
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
        <Modal closed={this.ModalClosed} show={this.state.show} />
        <Backdrop show={this.state.show} />
        <button className="Button" onClick ={this.ModalOpened} >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
