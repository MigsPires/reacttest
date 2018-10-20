import React, { Component } from 'react';

class Ola extends Component {
    constructor() {
      super();
      this.state = {
        merda: 'asdfasdfad',
      }
    }
  
    render() {
      return (
      <div>
          asdfasdfasdfasd
        {this.state.merda}
        <br/>
        {this.props.texto}
      </div>);
    }
  }

  export default Ola;