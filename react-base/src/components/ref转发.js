import React, { Component } from 'react';

class MyInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: ''
     }
  }
  handleChange = (e)=> {
    const value = e.target.value
    this.setState(state=> ({
      value
    }))
  }
  render() { 
    return ( 
      <input value={ this.state.value } onChange={ this.handleChange } />
    );
  }
}

function ForwardRef() {
  const MyContainer = React.forwardRef((props, ref)=> (
    <div>
      <MyInput ref={ ref } />
      <button onClick={ submit }>提交</button>
    </div>
  ))
  const ref = React.createRef()

  const submit = ()=>{
    console.log(ref.current);
  }

  return (
    <MyContainer ref={ ref } />
  );
}

 
export default ForwardRef;