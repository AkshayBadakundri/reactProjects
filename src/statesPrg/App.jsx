
import JSON from "./statesPrg/users.json"
import Table from './statesPrg/Table.jsx';
  import React, { Component } from 'react';
  
  class App extends Component {
    constructor()
    {
      super()
      this.state={json:JSON}
    }
    render() {
      return (
        <div>
          <Table data={this.state.json}/>
        </div>
      )
    }
  }
   export default App;
