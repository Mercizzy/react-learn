import React, { Component } from 'react';
import withLog from './withLog';

class Child1 extends Component {
  render() { 
    return ( 
      <h2>{ this.props.data }</h2>
    );
  }
}
 
export default withLog(Child1, { title: "Child1", data: "这是child1的data" });