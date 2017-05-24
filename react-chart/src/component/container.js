import React, { Component } from 'react';
import{Route} from 'react-router-dom';

import Home from './home'
import Chart from './chart'

class Container extends Component {
  render() {
    return (
      <div className="col-9">
            <Route exact path="/" component={Home} />
            <Route path="/chart" component={Chart} />
      </div>
    );
  }
}

export default Container;
