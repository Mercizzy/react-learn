import React, { Component } from 'react';

import {
  LoadingOutlined,
} from '@ant-design/icons';

class LazyLoading extends Component {
  render() { 
    return ( 
      <div>
        加载中<LoadingOutlined />
      </div>
     );
  }
}
 
export default LazyLoading;