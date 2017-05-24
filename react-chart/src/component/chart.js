import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';

class Chart extends Component {
  render() {
    return (
      <Table>
        <TableHeader  adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Action</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>10.000.000</TableRowColumn>
            <TableRowColumn><FlatButton backgroundColor="#D50000" hoverColor="#FF1744" icon={<FontAwesome name='trash' size='2x'/>}/></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

export default Chart;
