import React from 'react';
import logo from './logo.svg';
import './App.css';
import KeyPad from './KeyPad';
import Output from './Output';



class App extends React.Component {
  
  state = {
    result: ''
  }
  buttonPressed = buttonName => {
    if(buttonName === "=") {
      this.calculate()
    }
    else if (buttonName === "C"){
      this.reset()
    }
    else if (buttonName === "CE"){
      this.backspace()
    }
    else {
    this.setState({
      result: this.state.result + buttonName
    })
  }
    
  }
  backspace =() => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }
  reset =() => {
    this.setState({
      result: ""
    })
  }

  calculate =() => {
    try{
    this.setState ({
      result : eval(this.state.result)
    })}
    catch(e) {this.setState ({
      result: "error"
    })
    }
  }
  render(){
  return (
    <div className="App">
    <div className="cal-body">
    <Output result ={this.state.result}/>
      <KeyPad buttonPressed={this.buttonPressed}/>
    </div>
    </div>
  );
}
}
export default App;
