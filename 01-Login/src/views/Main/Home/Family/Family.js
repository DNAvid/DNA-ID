import axios from 'axios';
import React from 'react';
import {ProgressBar, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'


class PercentFamily extends React.Component {
  render(){
    return(
      <div>
        <h4>Completion of DNA from family sharing 50% of DNA</h4>
        <ProgressBar bsStyle="info" now={29} />
        <h4>Completion of DNA from family sharing 25% of DNA</h4>
        <ProgressBar bsStyle="info" now={58} />
      </div>
    )
  }
};

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class InviteFamily extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      relationship:'',
      content:'',
      toemail:''
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeToemail = this.handleChangeToemail.bind(this);
    this.handleChangeRelationship = this.handleChangeRelationship.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeToemail(event) {
    this.setState({
      toemail: event.target.value
    });
  }

  handleChangeRelationship(event) {
    this.setState({
      relationship: event.target.value
    });
  }

  handleChangeContent(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleSubmit(event) {
    let profile = JSON.parse(localStorage.getItem('profile'))
    axios.post('https://wt-davidweiss-dnavid_com-0.run.webtask.io/dnavid-sendgrid', {
      from_email: profile.email || 'davidweiss@dnavid.com',
      to_email: this.state.toemail,
      subject: profile.name + ' invites you to join their family on DNA\\/ID as their ' + this.state.relationship,
      content: 'Hi '+ this.state.name + ', claim your invite on https://dnavid.com \n\n' 
      + profile.name + ' sent this message: \n\n' 
      + this.state.content
    })
      .then(function (response) {
        console.log("Email sent, response was : ", response);
      })
      .catch(function (error) {
        console.log(error);
      });

    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <FieldGroup
          value={this.state.name}
          onChange={this.handleChangeName}
          id="formControlsText"
          type="text"
          label="Name"
          placeholder="Name of person to invite"
        />
        <FieldGroup
          value={this.state.toemail}
          onChange={this.handleChangeToemail}
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email (if a minor whose account you manage, enter your own)"
        />
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Relationship</ControlLabel>
          <FormControl
            componentClass="select"
            value={this.state.relationship}
            onChange={this.handleChangeRelationship}
            placeholder="select"
          >
            <option value="select">Select</option>
            <option value="sister">Sister</option>
            <option value="brother">Brother</option>
            <option value="mother">Mother</option>
            <option value="father">Father</option>
            <option value="spouse">Spouse</option>
            <option value="son">Son</option>
            <option value="daughter">Daughter</option>
            <option value="cousin">Cousin</option>
            <option value="friend">Friend</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Message</ControlLabel>
          <FormControl 
            value={this.state.content}
            onChange={this.handleChangeContent}
            componentClass="textarea"
            placeholder="Hi, I'd like to invite you to join DNA\/ID. DNA information is much more valuable when shared!" />
        </FormGroup>
        <Button type="submit" value="Submit">
          Invite to join DNA\/ID
        </Button>
      </form>
    )
  }
};

export class Family  extends React.Component {
  render() {
    return (
      <div>
        <h2> My and my family's shared DNA</h2>
        <PercentFamily/>
        <h2> Grow Network </h2>
        <InviteFamily/>
      </div>
    );
  }
}

export default Family;
