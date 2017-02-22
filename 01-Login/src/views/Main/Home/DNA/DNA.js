import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock, Media} from 'react-bootstrap'
import axios from 'axios'
import {DNASource, DNASources} from './DNASources'
import dnaSources from './DNA.json'

function getUserProfile(){
  return(
    axios(
      {
        baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
        url: 'doesUserHaveProfile.js',
        method: 'get',
        headers: {Authorization: 'Bearer ' + localStorage.id_token}
      }
    )
  )
}

export class DNA extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:"loading",
    }
  }
  componentWillMount(){ 
    getUserProfile().then( 
      res => {
        this.setState({user:res.data})
      }
    )
  }
  render(){
    if(this.state.user==='loading'){ 
      return(<div>Loading your DNA information</div>)}
    else if(!this.state.user){
      return( <div>Redirect to Home</div>)
    }else if(!this.state.user.DNA){
      axios(
        {
          baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
          url: 'updateUser.js',
          params: {
            key: "DNA",
            text: dnaSources, 
            json: true
          },
          method: 'post',
          headers: {Authorization: 'Bearer ' + localStorage.id_token}
        }
      )
      return (
        <div>
          <h3>Upload your DNA files</h3>
          <DNASources sources={dnaSources} pseudo={this.state.user.pseudo}/>
        </div>
      )
    }else if(this.state.user.DNA){
      var sourceName = Object.keys(this.state.user.DNA)[0]
      var source = this.state.user.DNA[sourceName]
      return (
        <div>
          <h3>Upload your DNA files</h3>
          <DNASources sources={this.state.user.DNA} pseudo={this.state.user.pseudo}/>
        </div>
      );
    }
  }
}

export default DNA
