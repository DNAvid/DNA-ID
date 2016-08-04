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
var usercount = firebaseApp.database().ref("numberofusers").on('value',function(snapshot){snapshot.val()});
console.log(usercount)

class UserCount extends React.Component{
        constructor(props){
                super(props)
                this.state = {usercount: '1'}
        }

        componentDidMount() {
                //                this.setState({usercount: firebaseApp.database().ref("numberofusers").set('100')})

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
