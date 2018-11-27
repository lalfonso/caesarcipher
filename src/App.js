import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Left from './components/Left/Left'; 
import Right from './components/Right/Right'; 
import Offset from './components/Offset/Offset'; 
import getNextSymbol from './Utils'; 

class App extends Component {

  lastChanged = 'left';

  constructor(props) {
    super(props);
    this.state = {
      offset: 1,
      offsetOptions: [1,2,3,4,5,10],
      leftText: '',
      rigthText: ''
    }
  }

  onChangeLeftValue = (value, offset) => {
    this.lastChanged = "left";
    let newRigthValue = '';
    for(let i = 0; i < value.length; i++) {
      newRigthValue += getNextSymbol(value[i], this.state.offset, 'up');
    }
    this.setState({
      leftText: value,
      rigthText: newRigthValue
    })
  }

  onChangeRigthValue = (value) => {
    this.lastChanged = 'right';
    let newLeftValue = '';
    for(let i = 0; i < value.length; i++) {
      newLeftValue += getNextSymbol(value[i], this.state.offset, 'down');
    }
    this.setState({
      leftText: newLeftValue,
      rigthText: value
    })
  }

  onChangeOffsetValue = (value) => {
    this.setState(
      { offset: value },
      () => {
        this.lastChanged === 'left' ? 
          this.onChangeLeftValue(this.state.leftText) :
          this.onChangeRigthValue(this.state.rigthText)
      }
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Caesar Cipher</h1>
        </header>
        <div>
          <Left 
            value={this.state.leftText}
            onChangeValue={this.onChangeLeftValue}
          ></Left>
          <Right
            value={this.state.rigthText}
            onChangeValue={this.onChangeRigthValue}
          ></Right>
          <Offset 
            options={this.state.offsetOptions}
            onChangeValue={this.onChangeOffsetValue}
          ></Offset>
        </div>
      </div>
    );
  }
}

export default App;
