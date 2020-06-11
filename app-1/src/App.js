import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      input: ''
    }
  }

  handleChange(value){
    this.setState({
      input: value
    })
  }

  render(){
    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange(e.target.value)} type='text'/>
        <p>{this.state.input}</p>
      </div>
  )};
}


export default App;
