import React, { Component } from 'react';
import { ColorContext } from './colorContext';

class Child1 extends Component {
  render() { 
    const style = {
      mixBlendMode: "difference",
      color: "white"
    }
    return ( 
      <ColorContext.Consumer>
        {
          ({background})=> (
            <div style={ { background } }>
              <p style={ style }>context颜色</p>
            </div>
          )
        }
      </ColorContext.Consumer>
    );
  }
}
 
export default Child1;