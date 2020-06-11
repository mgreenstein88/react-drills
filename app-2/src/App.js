import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      data: ['milk', 'cheese', 'chocolate']
    }
  }

  render(){
        let dataMap = this.state.data.map( (element, index) => {
          return <h2 key={index}>{element}</h2>
        });
        return <div className="App">{dataMap}</div>
    
  }
}

export default App;
