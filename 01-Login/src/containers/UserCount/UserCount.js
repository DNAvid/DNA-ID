import React from 'react';
var Radium = require('radium');
import {Label} from 'react-bootstrap'
var axios = require('axios');


var NbUsers = function() {
  return axios.get("https://wt-davidweiss-dnavid_com-0.run.webtask.io/nbUsers.js");
};

class UserCount extends React.Component{
  constructor(props){
    super(props)
    this.state = {usercount: '...'}
  }

  componentDidMount() {
    NbUsers().then(data => {
      this.setState({usercount: data.data.nbUsers}); 
    });
  }

  render(){
    return (
      <h3>
        <Label bsStyle="info">        
          {this.state.usercount}
        </Label>
      </h3>
    )

  }
}

export default Radium(UserCount);
