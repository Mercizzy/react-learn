import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
      errorInfo: ''
    }
  }
  componentDidCatch(error, errorInfo) {
    this.setState(state=> ({
      hasError: true,
      error,
      errorInfo
    }))
  }
  render() { 
    if(this.state.hasError) {
      const style = {
        padding: "10px",
        border: "1px solid #eee",
        background: "pink"
      }
      return (
        <div style={ style }>前方正在紧急抢救中。。。</div>
      );
    }
    return this.props.children;
  }
}
 
export default ErrorBoundary;