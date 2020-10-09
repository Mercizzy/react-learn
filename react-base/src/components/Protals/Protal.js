import { Component } from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root')

class Modal extends Component {
  constructor(props) {
    super(props);
    this.virtualEl = document.createElement('div')
  }

  componentDidMount() {
    root.appendChild(this.virtualEl)
  }
  componentWillUnmount() {
    root.removeChild(this.virtualEl)
  }
  render() { 
    return ReactDOM.createPortal(
      this.props.children,
      this.virtualEl
    );
  }
}
 
export default Modal;