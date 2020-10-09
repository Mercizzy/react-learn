import React, { Component, Fragment } from 'react';

const withLog = (Child, config)=> {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: config.title,
      }
    }
    render() {
      const style = {
        padding: "10px",
        border: "1px solid #eee"
      }
      return (
        <Fragment>
          <div style={ style }>{ this.state.title }</div>
          <Child data={ config.data } />
        </Fragment>
      );
    }
  }
}

export default withLog;