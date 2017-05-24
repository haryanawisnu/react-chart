import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { seeditem } from '../data/action'
import CircularProgress from 'material-ui/CircularProgress';

class listItem extends Component {
    constructor(props){
      super(props)
    }
    componentDidMount(){
      this.props.seeditem()
      console.log(this.props.list_item);
    }
  render() {
  if(this.props.list_item.length>0){
    return (
      <div style={{marginTop:10}}>
      {
        this.props.list_item.map((item) =>{
          return(
            <Card style={{width:'40%',margin:5,float:"left"}}>
              <CardHeader title={item.seller_username} subtitle={item.seller_level} avatar={item.seller_avatar} />
              <CardMedia >
                <img src={item.images[0]} style={{width:200,height:200}} alt={item.name} />
              </CardMedia>
              <CardTitle title={`Rp ${item.price}`} subtitle={item.name} style={{height:120}} />
              <CardActions>
                <RaisedButton label="Add To Chart" fullWidth={true} buttonStyle={{backgroundColor:'white'}} labelColor='#212121'/>
              </CardActions>
            </Card>
          )
        })}
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
