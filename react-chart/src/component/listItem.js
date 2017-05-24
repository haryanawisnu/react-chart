import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { seeditem } from '../data/action'
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';

class listItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
    };
    this.handleTouchTap=this.handleTouchTap.bind(this)
  }
  componentDidMount(){
    this.props.seeditem()
    console.log(this.props.list_item);
  }
  handleTouchTap = (id) => {
    console.log('id',id);
     this.setState({
       open: true,
     });
   };
   handleRequestClose = () => {
     this.setState({
       open: false,
     });
   };
  render() {
  if(this.props.list_item.length>0){
    return (
      <div style={{marginTop:10}}>
      {
        this.props.list_item.map((item) =>{
          return(
            <Card key={item.id} style={{width:'40%',margin:5,float:"left"}}>
              <CardHeader title={item.seller_username} subtitle={item.seller_level} avatar={item.seller_avatar} />
              <CardMedia style={{margin:5}}>
                <img src={item.images} style={{width:200,height:200}} alt={item.name} />
              </CardMedia>
              <CardTitle title={`Rp ${item.price}`} subtitle={item.name} style={{height:120}} />
              <CardActions>
                <RaisedButton onTouchTap={this.handleTouchTap(item.id)} label="Add To Chart" fullWidth={true} buttonStyle={{backgroundColor:'white'}} labelColor='#212121'/>
              </CardActions>
            </Card>
          )
        })
      }
      <Snackbar
          open={this.state.open}
          message="Adding Your Chart"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          bodyStyle={{backgroundColor:'#E91E63'}}
          contentStyle={{color:'white',textAlign:'center'}}
        />
      </div>
    );
  }else {
    return(
          <CircularProgress size={80} thickness={5} />
    );
  }
  }
}

const mapStateToProps = (state) => {
  return {
    list_item :state.list_item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    seeditem: () => {dispatch(seeditem())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(listItem);
