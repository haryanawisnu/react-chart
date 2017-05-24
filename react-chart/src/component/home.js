import React, { Component } from 'react';

import FormSearch from './formSearch'
import ListItem from './listItem'

class Home extends Component {
  render() {
    return (
      <div>
          <FormSearch/>
          <ListItem/>
      </div>
    );
  }
}

export default Home;
