import React, { PropTypes as T } from 'react';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock, Row, Col, Image} from 'react-bootstrap';

class FieldGroup extends React.Component{
  render(){
    return (
      <FormGroup controlId={this.props.id}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl {...this.props} />
        {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
      </FormGroup>
    );
  }
}

class ChoosePseudo extends React.Component {
  render(){

    return(
      <form>
        <FieldGroup
          id="formControlsText"
          type="Text"
          label="Choose your DNA ID"
          placeholder="1-15 characters, letters and numbers only"
        />

      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Bio</ControlLabel>
        <FormControl style={{minHeight: '80px'}} componentClass="textarea" placeholder="Why I'm interested in DNA. Is there something that runs in my family that could be due to DNA. Max. 120 characters." />
      </FormGroup>

      <Button onClick={ () => {alert("Sorry, cannot accept more DNA IDs for now. You are on the waiting list. Please be patient.")}}>
        Alright!
      </Button>
    </form>
    )
  }
}

export class Profile  extends React.Component {
  render(){
    let profile = this.props.auth.getProfile() 
    return (
      <div>
        <Row style={{marginBottom:'50px'}}> 
          <Col sm={12} md={6}>
            <ChoosePseudo/>
          </Col> 
        </Row>
        <Row >
          <Col sm={12} md={6} >
            <Image responsive style={{maxHeight:'60px'}} src={profile.picture}/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <h3>My profile</h3>
            <p><strong>Name: </strong> {profile.name}</p>
            <p><strong>Email: </strong> {profile.email}</p>
            <p><strong>Nickname: </strong> {profile.nickname}</p>
            <p><strong>Created At: </strong> {profile.created_at}</p>
            <p><strong>Updated At: </strong> {profile.updated_at}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Profile;
