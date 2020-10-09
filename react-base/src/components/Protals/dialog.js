import React, { Component } from 'react';
import Modal from './Protal'

class MyDialog extends Component {
  state = {
    isShow: false
  }
  handleModal = (boo)=> {
    this.setState({
      isShow: boo
    })
  }
  render() {
    const wrapStyle = {
      width: "300px",
      height: "300px",
      background: "sky-blue",
      overflow: "hidden"
    } 
    const innerStyle = {
      background: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
    const modal = this.state.isShow ? (
      <Modal>
        <div style={ innerStyle }>
          <div>
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={ ()=> { this.handleModal(false) } }>Hide modal</button>
        </div>
      </Modal>
    ) : null;
    return ( 
      <div style={ wrapStyle }>
        this.div has overflow: hidden
        <button onClick={ ()=> { this.handleModal(true) } }>show dialog</button>
        { modal }
      </div>
    );
  }
}
 
export default MyDialog;