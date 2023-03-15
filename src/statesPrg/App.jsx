
  import React, { Component } from 'react';
import './counter.css'
  // class App extends Component {
  //   constructor()
  //   {
  //     super()
  //     this.state={json:JSON}
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <Table data={this.state.json}/>
  //       </div>
  //     )
  //   }
  // }

  //  class App extends Component {

  //   constructor()
  //   {
  //     super()
  //     this.state={
  //       username:"akshay"
  //     }
  //   }
  //   clickBtn=()=>{
  //     this.setState({username:"appu"})
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <h1>{this.state.username}</h1>
  //         <button onClick={this.clickBtn}>change name</button>
  //       </div>
  //     )
  //   }
  // }
 class App extends Component {

    constructor()
    {
      super()
      this.state={
        count:0
      }
    }

    handelIncrement=()=>{
      this.setState({count:this.state.count+1})
    }

    
    handelDecrement=()=>{
      this.setState({count:this.state.count-1})
    }
    handelReset=()=>{
      this.setState({count:0})
    }
    render() {
      return (
        <div className="div11">
          <h1>{this.state.count}</h1>
          <div className="divbtn22">
          <button onClick={this.handelIncrement}>+Increment</button>
          <button onClick={this.handelDecrement}>-Decrement</button>
          <button className='reset' onClick={this.handelReset}>RESET</button>
          </div>
        </div>
      )
    }
  }
   export default App;
