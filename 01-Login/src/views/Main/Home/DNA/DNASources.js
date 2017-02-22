import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock, Media} from 'react-bootstrap'
import axios from 'axios'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

function setUser(props) {
  return (
    axios({
      baseURL: 'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
      url: 'updateUser.js',
      params: {
        category: props.category,
        subcategory: props.subcategory,
        key: props.key,
        text: props.text,
        json: props.json
      },
      method: 'post',
      headers: {
        Authorization: 'Bearer ' +  localStorage.id_token
      }
    }
    )
  )
}

export class DNASource extends React.Component {
  constructor(props){
    super(props)
    this.state={
      "file": this.props.source.file,
      "helpMessage":"Select file (above) and upload (below)"}

    this.handleChange = this.handleChange.bind(this)  
    this.handleSubmit = this.handleSubmit.bind(this)  
  }

  handleSubmit(event) {
    var data = new FormData();
    data.append('file', this.state.file);
    var config = {
      onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
      },
      params:{
        pseudo:this.props.pseudo,
        key:this.props.sourceName
      },
      headers: {
        Authorization: "Bearer " + localStorage.id_token 
      }
    };
    this.setState({"helpMessage":"Uploading..."})
    axios.put('https://wt-davidweiss-dnavid_com-0.run.webtask.io/transferFiles.js', data, config)
      .then(res => {
        this.setState({ "helpMessage":"Success: file uploaded"})
      })
      .catch(err => {
        console.log("err is:", err)
        this.setState({ "helpMessage":"Aw, snap! Some's wrong.. Make sure the file transfer takes less than 35 seconds and all files are less than 16MB combined."})
      });
    console.log(this.props.sourceName)
    setUser({
     category: "DNA",
     subcategory: this.props.sourceName,
      key: "file",
      text: this.state.file.name
    })
  }

  handleChange (event){
    this.setState({"file" : event.target.files[0],
      "helpMessage": "Click button below to upload selected file."})
  }

  render(){
    var {badge, heading, description}= this.props.source
    
    return (
      <div style={{marginTop:'40px', marginBottom:'60px'}}>
        <Media>
          <Media.Left>
            <img width={64} height={64} src={badge} alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{heading}</Media.Heading> 
            <p>{description}</p>
            <form onSubmit={this.handleSubmit}>
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="Upload file to private space"
                help= {this.state.helpMessage}
                onChange={this.handleChange}
              />
              <Button type="submit">
                Upload
              </Button>
            </form>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

export class DNASources extends React.Component{
  render(){
    const {pseudo, sources}= this.props
    return(
      <div>
        {Object.keys(sources).map(
          (sourceName)  =>
            <DNASource  source={sources[sourceName]} sourceName={sourceName} pseudo={pseudo}/>)
        }
      </div>
    )
  }
}

export default DNASources
