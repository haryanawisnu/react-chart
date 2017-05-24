import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarSeparator,ToolbarGroup} from 'material-ui/Toolbar';

class FormSearch extends Component {
  render() {
    return (
      <div >
      <Toolbar>
          <ToolbarGroup style={{witdh:'100%'}}>
            <TextField hintText="Keyword" hintStyle={{color: 'white'}} fullWidth={true}/>
            <ToolbarSeparator/>
            <RaisedButton label="Search" buttonStyle={{backgroundColor:'white'}} labelColor='#212121' />
          </ToolbarGroup>
      </Toolbar>
      </div>
    );
  }
}

export default FormSearch;
