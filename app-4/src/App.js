import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  changeUser(value){
    this.setState({
      username: value
    })
  }
  changePass(value){
    this.setState({
      password: value
    })
  }
  click(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }
  render(){
    return(
    <div>
      <input onChange={ (e) => this.changeUser(e.target.value)}/>
      <input onChange={ (e) => this.changePass(e.target.value)}/>
      <button onClick={ () => this.click () }>Login</button>
    </div>
    )
  }
}

export default App;
