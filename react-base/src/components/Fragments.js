import React, { Component, Fragment } from 'react';

/**
 * 当类似于ul->li，tr->td包裹时，如果子组件外层用div包裹，明显是不符合规范的
 * 使用<Fragment></Fragment>或者<></>
 * 它们不会被渲染，但是能够使用只有一个主节点
 */

class Fragments extends Component {
  render() { 
    return ( 
      <ul>
        <Child />
      </ul>
     );
  }
}

class Child extends Component {
  render() { 
    return ( 
      <Fragment>
        <li>111</li>
        <li>222</li>
      </Fragment>
    );
  }
}

 
export default Fragments;