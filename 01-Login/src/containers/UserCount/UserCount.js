var Radium = require('radium');
import React from 'react'
import {Badge} from 'react-bootstrap'
var firebase = require('firebase')


var config = {
  apiKey: "AIzaSyDcVtH8AkSWUrEwjeQEWX2GtyaaX3uzpH8",
  authDomain: "dnavid-c48b6.firebaseapp.com",
  databaseURL: "https://dnavid-c48b6.firebaseio.com",
  storageBucket: "dnavid-c48b6.appspot.com",
};
var firebaseApp = firebase.initializeApp(config);
var UCRef = firebaseApp.database().ref("numberofusers")

class UserCount extends React.Component{
  constructor(props){
    super(props)
    this.state = {usercount: '3'}
  }

  componentDidMount() {
    // this.setState({usercount:4})
    var uc = UCRef.on('value', snapshot => {
      this.setState({usercount: snapshot.val()});
    });
      
    //  UCRef.on('value',function(snapshot){return(snapshot.val())})
    this.setState({usercount:uc})
  }

  render(){
    return (
      <Badge>        
        {this.state.usercount}
      </Badge> 
    )

  }
}

export default Radium(UserCount);
