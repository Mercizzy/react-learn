import React, { Component, Fragment } from 'react';
import { ColorContext } from './colorContext';

class Child2 extends Component {
  state = {
    color: ''
  }
  handleChange = (e)=> {
    const color = e.target.value
    this.setState(state=> ({
      color
    }))
  }
  render() { 
    
    return ( 
      <ColorContext.Consumer>
        {
          ({changeColor})=> (
            <Fragment>
              <input value={this.state.color} onChange={ this.handleChange } />
              <button onClick={ ()=> { changeColor(this.state.color) } }>改变颜色</button>
            </Fragment>
          )
        }
      </ColorContext.Consumer>
    );
  }
}
 
export default Child2;