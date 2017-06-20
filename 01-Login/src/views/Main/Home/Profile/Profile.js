import axios from 'axios'
import React  from 'react';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock, Row, Col, Grid, Image} from 'react-bootstrap';

function getFile(props) {
  return (
    axios({
      baseURL: 'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
      url: 'transferFiles.js',
      params: {
        key: props.key, // profileName
        pseudo: props.pseudo, // DNAvid
        //json: props.json
      },
      method: 'get',
      headers: {
        Authorization: 'Bearer ' +  localStorage.id_token
      }
    })
  )
}

function getUser() {
  return (
    axios({
      baseURL: 'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
      url: 'doesUserHaveProfile.js',
      method: 'get',
      headers: {
        Authorization: 'Bearer ' +  localStorage.id_token
      }
    })
  )
}

function setUser(props) {
  return (
    axios({
      baseURL: 'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
      url: 'updateUser.js',
      params: {
        category: props.category,
        key: props.key,
        text: props.text,
        json: props.json
      },
      method: 'post',
      headers: {
        Authorization: 'Bearer ' +  localStorage.id_token
      }
    })
  )
}

function FieldGroup({
  id,
  label,
  help,
  ...props
}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class ChoosePseudo extends React.Component {
  constructor(props) {
    super(props)
    if (!this.props.pseudo) {
      this.state = {
        pseudo: "",
      }

    } else {
      this.state = {
        pseudo: this.props.pseudo,
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  handleSubmit(event) {
    axios({
      baseURL: 'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
      url: 'createUser.js',
      params: {
        pseudo: this.state.pseudo
      },
      method: 'post',
      headers: {
        Authorization: 'Bearer ' + localStorage.id_token
      }
    })
      .then(
        res => {
          getUser()
            .then(
              res => {
                this.setState({
                  user: res.data
                })

              }
            )

        }
      )
  }

  render() {
    return (
      <Row>
        <Col xs={6} sm={5} md={4} lg={2}>
          <h4>Choose your Pseudo</h4>

          <form onSubmit={this.handleSubmit}>
            <FieldGroup
              id="formControlsText"
              name="pseudo"
              type="text"
              label="Write your name. Use a nickname for more privacy."
              placeholder="Letters and numbers - max. 17 chars"
              value={this.state.pseudo}
              onChange={this.handleChange}
              help="Please note that this ID will be used to identify your profile when sharing, for example, with family. Note it is different from your login (which is strictly private)."
            />
            <Button type="submit"> Choose</Button>
          </form>
        </Col>
      </Row>
    )
  }
}

class SetProfilePicture extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "picture": JSON.parse(localStorage.profile).picture,
      "background": this.props.profile.background,
      helpMessage: "Choose picture",
      files: undefined
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      "files": event.target.files,
      "helpMessage": "Uploading " + event.target.files[0].name
    })
  }

  handleSubmit(event) {
    var data = new FormData();
    data.append('file', this.state.files[0]);
    var config = {
      onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
      },
      params:{
        pseudo:this.props.pseudo,
        key:"profilePicture"
      },
      headers: {
        Authorization: "Bearer " + localStorage.id_token 
      }
    };

    axios.put('https://wt-davidweiss-dnavid_com-0.run.webtask.io/transferFiles.js', data, config)
      .then(function (res) {
        this.setState({ "helpMessage":"File uploaded"})
      })
      .catch(function (err) {
        this.setState({ "helpMessage":"oh, snap!"})

      });
  }

  render() {
    const pseudo = this.props.pseudo
    return (
      <div>
        <Row >
          <Col xs={3} sm={2} md={2} lg={2}>
            <Image src={this.state.picture||"https://storage.googleapis.com/dnavid/egg.png"} thumbnail />
          </Col>
          <Col xs={9} sm={10} md={10} lg={10}><h1>
              {pseudo}
            </h1> 
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <form onSubmit={this.handleSubmit}>
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="Picture"
                help= {this.state.helpMessage}
                onChange={this.handleChange}
              />
              <Button type="submit"> Change Picture </Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

class SetProfileBio extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.profile.bio == undefined) {
      console.log("bio is undefined")
      this.state = {
        "bio": ""
      }
    } else {
      this.state = {
        "bio": this.props.profile.bio
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  handleSubmit(event) {
    setUser({
      category: "profile",
      key: "bio",
      text: this.state.bio
    })
  }
  render() {
    return (
      <Row>
        <Col xs={8} sm={8} md={5} lg={4}>
          <form onSubmit={this.handleSubmit}>
            <FieldGroup 
              style={{minHeight:145}}
              id="formControlsTextarea"
              componentClass="textarea"
              name="bio"
              type="textarea"
              label="Bio"
              placeholder="Why I'm interested in DNA. Is there something that runs in my family that could be due to DNA. Max. 120 characters."
              value={this.state.bio}
              onChange={this.handleChange}
            />
            <Button type="submit"> Update bio</Button>
          </form>
        </Col>
      </Row>
    )
  }
}

class SetProfileDetails extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.profile.private === undefined) {
      this.state = {
        "firstName": "",
        "lastName": "",
        "email": "",
        "phone": ""
      }
    } else {
      this.state = {
        "firstName": this.props.profile.private.firstName,
        "lastName": this.props.profile.private.lastName,
        "email": this.props.profile.private.email,
        "phone": this.props.profile.private.phone
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    let text = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    }

    setUser({
      category: "profile",
      key: "private",
      text: text,
      json: true
    })
  }

  render() {
    return (
      <Row>
        <Col xs={6} sm={6} md={3} lg={3}>
          <h4>Personal Details</h4>
          <form onSubmit={this.handleSubmit}>
            <FieldGroup
              id="formControlsText"
              name="firstName"
              type="text"
              label="First Name"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <FieldGroup
              id="formControlsText"
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <FieldGroup
              id="formControlsText"
              type="text"
              name="phone"
              label="Phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <FieldGroup
              id="formControlsText"
              name="email"
              type="email"
              label="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Button type="submit"> Update details</Button>
          </form>
        </Col>
      </Row>
    )
  }
}

export class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: "loading"
    }

  }
  componentWillMount() {
    getUser().then(
      res => {
        this.setState({
          user: res.data
        })
      }
    )
  }
  render() {
    if (this.state.user == 'loading') {
      return <div> Looking up your info...</div>
    } else if (this.state.user === "") {
      return (
        <ChoosePseudo/>
      )
    } else {
      return (
        <div>   
          <SetProfilePicture pseudo={this.state.user._id} profile={this.state.user.profile}/>
          <br/>
          <SetProfileBio profile={this.state.user.profile}/>
          <br/>
          <SetProfileDetails profile={this.state.user.profile}/>
        </div>
      )
    }
  }
}

export default Profile;
