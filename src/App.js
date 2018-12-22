import React, { Component } from 'react'
import './App.css'
import Inputer from './Inputer'

class App extends Component {
  render() {
    return (<Inputer min={0} max={100} />)
  }
}

export default App;
