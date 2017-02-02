import axios from 'axios'
import { hashHistory } from 'react-router';
import React from 'react';
import {CheckBox, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Row, Col, Grid, Image} from 'react-bootstrap';
import shareDefault from './share'


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

class StatefulCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      [this.props.question]: this.props.answer
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    var name = target.name;
    this.setState({
      [name]: value
    });

    axios(
      {
        baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
        url: 'updateUser.js',
        params: {
          category: "share",
          subcategory: this.props.category,
          key: name,
          text: value},
        method: 'post',
        headers: {Authorization: 'Bearer ' + localStorage.id_token}
      }
    )
  }

  render() {
    return (
      <div>
      <label>
        <input
          name= {this.props.question}
          type="checkbox"
          defaultChecked={this.props.answer==='true'}
          checked={this.state.name}
          onChange={this.handleInputChange} />
        {" "+this.props.question}
      </label>
      <br/>
  </div>

    );
  }
}

class QuestionGroup extends React.Component{
  render(){
    const questions = this.props.questions
    return(
      <div>
        <h4>{this.props.category} </h4>
        {
          Object.keys(questions).map((question)=>
            <StatefulCheckbox 
              question={question} 
              answer={questions[question]}
              category={this.props.category}/>

            )
        }
        <br/>
      </div>  
    )
  }
}

class Questionnaire extends React.Component{
  render(){
    var share = this.props.share
    var categories = Object.keys(share)
    return(  
      <form>
        {
          categories.map((category) =>
            <QuestionGroup 
              category={category}
              questions={share[category]}
            />
            )
        }

      </form>
    )
  }
}

class Share extends React.Component {
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
      return(<div>Loading your sharing preferences</div>)}
    else if(!this.state.user){
      return( <div>Redirect to Home</div>)
    }else if (!this.state.user.share){
      console.log("shareDefault is",shareDefault)
      axios(
        {
          baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
          url: 'updateUser.js',
          params: {
            key: "share",
            text: shareDefault},
          method: 'post',
          headers: {Authorization: 'Bearer ' + localStorage.id_token}
        }
      )
      return(
        <Questionnaire
          share={shareDefault}
        />
      )

    }else{
      return(
        <Questionnaire
          share={this.state.user.share}
        />
      )} 
  }
}

export default Share 
