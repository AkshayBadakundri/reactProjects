import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div>

        <form action="">
            <label htmlFor="firstname">firstname</label> <br />
            <input type="text" /><br />
            <label htmlFor="lastname">lastname</label> <br />
            <input type="text" /><br />
            <label htmlFor="Email">Email</label><br />
            <input type="Email" />
        </form>
      </div>
    )
  }
}
