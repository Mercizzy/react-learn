import React, { Component } from 'react';
import { ColorContext } from './colorContext'
import Child1 from './Child1'
import Child2 from './Child2'
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      background: '#000',
      changeColor: this.changeColor
     }
  }
  changeColor = (background)=> {
    this.setState(state=> ({
      background
    }))
  }
  render() { 
    return ( 
      <ColorContext.Provider value={ this.state }>
        <Child1 />
        <Child2 />
      </ColorContext.Provider>
    );
  }
}
 
export default Parent;