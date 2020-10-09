import React, { Component } from 'react';
import withLog from './withLog';
import Child1 from './Child1';
import Child2 from './Child2';

const NewChiild2 = withLog(Child2, { title: "Child2", data: "这是child2的data" })

class HocParent extends Component {
  render() { 
    return ( 
      <div>
        <Child1 />
        <NewChiild2 />
      </div>
    );
  }
}
 
export default HocParent;