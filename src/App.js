import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//const value1 = Math.floor(Math.random() * 100);
//const value2 = Math.floor(Math.random() * 100);
//const value3 = Math.floor(Math.random() * 100);
//const proposedAnswer = Math.floor(Math.random() * 0) + value1 + value2 + value3;

class App extends Component {
  constructor(props){
  	super(props);
	
    this.state = {
      	value1: this.getValue(),
      	value2: this.getValue(),
      	value3: this.getValue(),
    	numQuestions: 0,
      	numCorrect: 0
    }
  }
  
  getValue = () => Math.floor(Math.random() * 100);
  
  proposedAnswer = () => Math.floor(Math.random() * 2) + this.state.value1 + this.state.value2 + this.state.value3;
  
  //checkAnswer hara una suma de los valores 1, 2 y 3 y lo restara con la respuesta propuesta. Si da 0 la respuesta es correcta, si no, falsa.
  checkAnswer = () => {
  	const sumOfValues = this.state.value1 + this.state.value2 + this.state.value3;
    if(sumOfValues - this.proposedAnswer() === 0){
    	return true
    }else{
    	return false
    }
  }
  
  //onButtonAnswer
  onButtonAnswer = (buttonAnswer) =>{
    if(buttonAnswer && this.checkAnswer()){
    	
      	this.updateState(true)
      
    }else if(!buttonAnswer && !this.checkAnswer()){
    	
      	this.updateState(true)
      
    }else{
    	
      	this.updateState(false)
      
    }
  }
  
  updateState = (answer) =>{
  	this.setState((prevState) => {
    	const respuestaCorrecta = {
          	value1: this.getValue(),
      		value2: this.getValue(),
      		value3: this.getValue(),
        	numQuestions: prevState.numQuestions + 1,
          	numCorrect: prevState.numCorrect + 1
        }
        const respuestaIncorrecta = {
          	value1: this.getValue(),
      		value2: this.getValue(),
      		value3: this.getValue(),
        	numQuestions: prevState.numQuestions + 1
        }
        
        return answer 
          ? respuestaCorrecta 
          : respuestaIncorrecta;
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.proposedAnswer()}`}</p>
          </div>
          <button onClick={() => this.onButtonAnswer(true)}>True</button>
          <button onClick={() => this.onButtonAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
          
        </div>
      </div>
    );
  }
}

export default App;
