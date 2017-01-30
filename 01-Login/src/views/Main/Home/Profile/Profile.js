import axios from 'axios'
import React, { PropTypes as T } from 'react';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock, Row, Col, Grid, Image} from 'react-bootstrap';

function getUserProfile(){
return(  axios({
    baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
    url: 'doesUserHaveProfile.js',
    method: 'get',
    headers: {Authorization: 'Bearer ' + localStorage.id_token}}))}

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
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    this.props.onSubmit(event.target.value)

  }
  handleChange(event){
    this.props.onChange(event.target.value)

  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <FieldGroup
          id="formControlsText"
          value={this.props.value}
          onChange={this.handleChange}
          type="text"
          label="Choose your user name"
          placeholder="1-15 characters, letters and numbers only"
        />
        <Button type="submit" value="Submit">
          Get it
        </Button>
      </form>
    )
  }
}

class WriteBio extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    this.props.onSubmit(event.target.value)

  }

  handleChange(event){
    this.props.onChange(event.target.value)

  }

  render(){
    return(
      <Row className="show-grid">
        <Col xs={12}>

          <form onSubmit={this.handleSubmit}>
            <FieldGroup
              id="formControlsTextarea"
              value={this.props.value}
              onChange={this.handleChange}
              componentClass="textarea"
              label="Bio"
              placeholder={this.props.bio ? this.props.bio : "Why I'm interested in DNA. Is there something that runs in my family that could be due to DNA. Max. 120 characters."}
              style={{minHeight: '80px'}}
            />
            <Button type="submit" value="Submit">
              Update bio 
            </Button>
          </form>

        </Col>
      </Row>

    )
  }
}

class SetPicture extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    this.props.onSubmit(event.target.value)
  }

  handleChange(event){
    this.props.onChange(event.target.value)

  }

  render(){
    return(
      <div>
      <Row className="show-grid">
        <Col xs={3}>
          <Image src={this.props.picture|| "https://storage.googleapis.com/dnavid/egg.png"} thumbnail/>
        </Col>
        <Col xs={9}><h1>
            {this.props._id}
          </h1>
        </Col>
      </Row>
      <Row>
          <FieldGroup
            id="formControlsFile"
            type="file"
            label="Upload picture"
          />
      </Row>
  </div>
    )
  }
}

class SetProfileDetails extends React.Component {
  constructor(props){
    super(props)
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
    this.handleChangeLastName = this.handleChangeLastName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    this.props.onSubmit(event.target.value)

  }
  handleChangeFirstName(event){
    this.props.onChangeFirstName(event.target.value)
  }
  handleChangeLastName(event){
    this.props.onChangeLastName(event.target.value)
  }
  handleChangeEmail(event){
    this.props.onChangeEmail(event.target.value)
  }
  render(){
    const {firstName, lastName, email} = this.props
    return(
      <Row>
        <Col sm={12} md={6}>
          <h4>Personal Details</h4>
          <form onSubmit={this.handleSubmit}>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="First Name"
              placeholder={firstName?firstName:"First name"}
              value={this.props.valueFirstName}
              onChange={this.handleChangeFirstName}
            />
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Last Name"
              placeholder={lastName?lastName:"Last name"}
              value={this.props.valueLastName}
              onChange={this.handleChangeLastName}
            />
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder={email?email:"Email"}
              value={this.props.valueEmail}
              onChange={this.handleChangeEmail}
            />

          <Button type="submit" value="Submit">
            Update details
          </Button>
        </form>
      </Col>
    </Row>
    )
  }
}


  //////////
 // Main //
//////////
export class Profile  extends React.Component {
  constructor(props){
    super(props)
    this.state={
      userHasProfile:'loading',
      pseudo: undefined,
      bio: undefined,
      picture: undefined,
      firstName: undefined,
      LastName: undefined
    }

    this.handleChangeFirstName= this.handleChangeFirstName.bind(this);
    this.handleChangeLastName= this.handleChangeLastName.bind(this);
    this.handleChangeEmail= this.handleChangeEmail.bind(this);
    this.handleChangePicture= this.handleChangePicture.bind(this);
    this.handleChangeBio= this.handleChangeBio.bind(this);
    this.handleChangePseudo= this.handleChangePseudo.bind(this);

    this.handleSubmitDetails= this.handleSubmitDetails.bind(this);
    this.handleSubmitPicture= this.handleSubmitPicture.bind(this);
    this.handleSubmitBio= this.handleSubmitBio.bind(this);
    this.handleSubmitPseudo = this.handleSubmitPseudo.bind(this);
  }

  handleChangeFirstName(value) {
    this.setState({
      firstName: value
    });
  }
  handleChangeLastName(value) {
    this.setState({
      lastName: value
    });
  }
  handleChangeEmail(value) {
    this.setState({
      email: value
    });
  }
  handleChangePicture(value) {
    this.setState({
      picture: value
    });
  }
  handleChangePseudo(value) {
    this.setState({
      pseudo: value
    });
  }
  handleChangeBio(value) {
    this.setState({
      bio: value
    });
  }


  handleSubmitDetails(value) {
   axios({
      baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
      url: 'updateUser.js',
      params: {
        category: "profile",
        key: "firstName",
        text: this.state.firstName
      },
      method: 'post',
      headers: {Authorization: 'Bearer ' + localStorage.id_token}}) 

    axios({
      baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
      url: 'updateUser.js',
      params: {
        category: "profile",
        key: "lastName",
        text: this.state.lastName
      },
      method: 'post',
      headers: {Authorization: 'Bearer ' + localStorage.id_token}}) 

    axios({
      baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
      url: 'updateUser.js',
      params: {
        category: "profile",
        key: "email",
        text: this.state.email
      },
      method: 'post',
      headers: {Authorization: 'Bearer ' + localStorage.id_token}}) 
    console.log(this.state.firstName, this.state.lastName, this.state.email)
  }
  handleSubmitPicture(value) {
  }
  handleSubmitPseudo(value) {
    axios({
      baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
      url: 'createUser.js',
      params: {
        pseudo: this.state.pseudo
      },
      method: 'post',
      headers: {Authorization: 'Bearer ' + localStorage.id_token}}) 
        .then( 
          res => {
            getUserProfile().then( 
              res => {
                this.setState({userHasProfile:res.data})
              }
            )

          }
        )
  }
  handleSubmitBio(value) {
    axios({
      baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
      url: 'updateUser.js',
      params: {
        category: "profile",
        key: "bio",
        text: this.state.bio
      },
      method: 'post',
      headers: {Authorization: 'Bearer ' + localStorage.id_token}}) 
  }

  componentWillMount(){ 
    getUserProfile().then( 
      res => {
        this.setState({userHasProfile:res.data})
      }
    )
  }
  render(){
    if(this.state.userHasProfile=='loading'){ return <div> Looking up your info...</div>}

    if(!this.state.userHasProfile){ 
      return (
        <ChoosePseudo value={this.state.pseudo} onChange={this.handleChangePseudo} onSubmit={this.handleSubmitPseudo} />
      )
    }

    else{ 
      let user = this.state.userHasProfile 
      let auth0User= this.props.auth.getProfile()
      const _id = user._id
      const {bio, picture, firstName, lastName, email}=user.profile

      return (
        <Grid>
          <SetPicture 
            value={this.state.picture} 
            onChange={this.handleChangePicture} 
            onSubmit={this.handleSubmitPicture} 
            picture={picture} 
            _id={_id} />
          <WriteBio 
            value={this.state.bio} 
            onChange={this.handleChangeBio} 
            onSubmit={this.handleSubmitBio} 
            bio={bio} />
          <SetProfileDetails 
            onSubmit={this.handleSubmitDetails}
            onChangeFirstName={this.handleChangeFirstName}
            onChangeLastName={this.handleChangeLastName}
            onChangeEmail={this.handleChangeEmail}
            valueFirstName={this.state.firstName}
            valueLastName={this.state.lastName}
            valueEmail={this.state.email}
            firstName={firstName} 
            lastName={lastName} 
            email={email}
          />
        </Grid>
      )
    }
  }
}
export default Profile;
