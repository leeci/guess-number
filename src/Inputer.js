import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Inputer extends Component {
  constructor() {
    super()

    this.state = {
      gameStart: false,
      answer: null,
      min: null,
      max: null,
      inputNum: null,
      records: []
    }
  }

  startGameEvent = () => {
    this.setState({
      gameStart: true,
      min: this.props.min,
      max: this.props.max,
      answer: Math.floor( Math.random()*this.props.max )+this.props.min,
      records: []
    })
  }

  guessEvent = () => {
    var guess = parseInt(this.state.inputNum)

    var record = {
      min: this.state.min,
      max: this.state.max,
      guess
    }

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
      return
    }

    this.state.records.push(record)
  }

  render() {
    let list = this.state.records.map((item, index) => (
      <li key={index}>猜：{item.guess} (範圍 {item.min} ~ {item.max})</li>
    ))

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
         <ol>
           {list}
         </ol>
      </div>
    )
  }
}

Inputer.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number
}

Inputer.propDefault = {
    min: 0,
    max: 100
}

export default Inputer;
