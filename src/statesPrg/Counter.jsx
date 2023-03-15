import React, { Component } from 'react'

export default class Counter extends Component {

  constructor()
  {
    super()
    this.state={
      username:"akshay"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
      </div>
    )
  }
}
