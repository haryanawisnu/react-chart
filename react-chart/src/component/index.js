import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import{BrowserRouter as Router} from 'react-router-dom';

import Header from './header'
import Footer from './footer'
import ListMenu from './ListMenu'
import Container from './container'

class MainComponent extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router>
          <div className="App">
            <Header/>
            <ListMenu/>
            <Container/>
            <Footer/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default MainComponent;
