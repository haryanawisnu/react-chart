import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import {Link} from 'react-router-dom'

import '../style/css/ListMenu.css';

class ListMenu extends Component {
  render() {
    return (
      <div className="col-3 menu">
          <ul>
            <Link to="/" style={{textDecoration:"none"}}><li><FontAwesome name='home' style={{marginRight:24,marginLeft:20}}/>Home</li></Link>
            <Link to="/chart" style={{textDecoration:"none"}}><li><FontAwesome name='shopping-cart' style={{marginRight:24,marginLeft:20}}/>Chart</li></Link>
          </ul>
      </div>
    );
  }
}

export default ListMenu;
