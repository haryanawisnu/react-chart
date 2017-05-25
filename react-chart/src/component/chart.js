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
import { connect } from 'react-redux'
import { seedchart,addchart,updatechart,deletechart } from '../data/action/chart'
import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';

class Chart extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      obj:{}
    };
  }
  componentDidMount(){
    this.props.seedchart()
  }
  handleOpen = (e,id) => {
    console.log(e,id);
    let obj={};
    obj.id=e;
    obj.index=id;
    this.setState({open: true,obj});
  };

  handleClose1 = () => {
    this.setState({open: false});
  };
  handleClose2 = () => {
    this.props.deletechart(this.state.obj);
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose1}
        backgroundColor	='white' labelStyle={{color:'black'}}
        style={{marginRight:5}}
        hoverColor='#F8BBD0'
      />,
      <FlatButton
        label="Discard"
        onTouchTap={this.handleClose2}
        backgroundColor	='white' labelStyle={{color:'black'}}
        hoverColor='#F8BBD0'
      />,
    ];
    if(this.props.list_chart.length>0){
    return (
      <div>
      <Table>
        <TableHeader  adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Quantity</TableHeaderColumn>
            <TableHeaderColumn>Action</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        {  this.props.list_chart.map((chart,index) =>{
          return(
            <TableRow key={chart.id}>
              <TableRowColumn>{chart.name}</TableRowColumn>
              <TableRowColumn>{chart.price}</TableRowColumn>
              <TableRowColumn>{chart.qty}</TableRowColumn>
              <TableRowColumn><FlatButton backgroundColor="#D50000" hoverColor="#FF1744" icon={<FontAwesome name='trash' size='2x'/>} onTouchTap={this.handleOpen.bind(this,chart.id,index)}/></TableRowColumn>
            </TableRow>
          )
          })}
        </TableBody>
      </Table>
      <Dialog actions={actions}  modal={false} open={this.state.open} onRequestClose={this.handleClose} bodyStyle={{color:'white'}}>
          Discard this chart?
      </Dialog>
      </div>
      )
    }else {
      return(
            <CircularProgress size={80} thickness={5} />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    list_chart :state.Chart.list_chart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatechart: (data) => {dispatch(updatechart(data))},
    seedchart: () => {dispatch(seedchart())},
    deletechart: (data) => {dispatch(deletechart(data))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chart);
