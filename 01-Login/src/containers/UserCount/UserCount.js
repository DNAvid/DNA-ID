import React from 'react';
var Radium = require('radium');
import {Badge} from 'react-bootstrap'
var axios = require('axios');


var NbUsers = function() {
    return axios.get("https://wt-davidweiss-dnavid_com-0.run.webtask.io/express-with-mongodb");
};

var promiseObj = NbUsers();

class UserCount extends React.Component{
  constructor(props){
    super(props)
    this.state = {usercount: '...'}
  }

  componentDidMount() {
    promiseObj.then(data => {
      this.setState({usercount: data.data.n}); 
    });

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
