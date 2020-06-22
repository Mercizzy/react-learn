import React, { Component } from 'react';

class ErrorDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentWillMount() {
    throw new Error('111111');
  }
  render() { 
    return ( 
      <h2>111</h2>
    );
  }
}
 
export default ErrorDemo;