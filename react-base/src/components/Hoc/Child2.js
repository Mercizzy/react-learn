import React, { Component } from 'react';

class Child2 extends Component {
  render() { 
    return ( 
      <h2>{ this.props.data }</h2>
    );
  }
}
 
export default Child2;