import React, { Component } from 'react'

class Inputer extends Component {
  constructor() {
    super()

    this.state = {
      gameStart: false,
      answer: null,
      min: null,
      max: null,
      inputNum: null
    }
  }

  startGameEvent = () => {
    this.setState({
      gameStart: true,
      min: this.props.min,
      max: this.props.max,
      answer: Math.floor( Math.random()*this.props.max )+this.props.min
    })
  }

  guessEvent = () => {
    var guess = parseInt(this.state.inputNum)

    if (this.state.answer === guess) {
      alert('WIN')
      this.setState({
        gameStart: false
      })
    } else if (guess < this.state.max && guess > this.state.answer) {      
      this.setState({ max : guess })
    } else if (guess > this.state.min && guess < this.state.answer) {
      this.setState({ min : guess })
    } else {
      console.log('no effect')
    }
  }

  render() {
    return (
      <div>
        <input onChange={ (e) => { this.setState( { inputNum: e.target.value }) }} />
        <div>
          <p style={ { float: 'left' } } >最小: { this.state.min }</p>
          <p style={ { float: 'left' } } >最大: { this.state.max }</p>
        </div>
        <div style={ { clear: 'both' } }>
          <button onClick={ this.guessEvent } disabled={ !this.state.gameStart }>我猜</button>
          <button onClick={ this.startGameEvent } >重新開始</button>
        </div>
         <h3>猜猜記錄</h3>
      </div>
    )
  }
}

export default Inputer;
