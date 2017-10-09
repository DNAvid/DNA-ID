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
      "fileHash": this.props.source.file.hash ,
      "fileSecret": this.props.source.file.secret,
      "filetoupload": "",
      "helpMessage":"Select file above to upload"}

    this.handleSubmitDownload = this.handleSubmitDownload.bind(this)  
    this.handleChangeUpload = this.handleChangeUpload.bind(this)  
    this.handleSubmitUpload = this.handleSubmitUpload.bind(this)  
  }

  handleSubmitUpload(event) {
    var data = new FormData();
    // Approx 40-digit random number secret
    const secret = crypto.getRandomValues(new Uint32Array(4)).join('')
    data.append("interactive", 0);
    data.append("secret", secret);
    data.append('filetoupload', this.state.filetoupload, 'filetoupload');
    this.setState({"helpMessage":"Uploading..."})
    // upload to ipfs
    console.log("Uploading to IPFS.")
    axios.post('https://dnacoinstorage.com/fileUpload', data)
      .then(res => {
        console.log(res)
        this.setState({ "helpMessage":"Success: file uploaded"})
        // Add secret and hash to user profile.
        setUser({
          category: "DNA",
          subcategory: this.props.sourceName,
          key: "file.hash",
          text: res.data.hash
        })
        setUser({
          category: "DNA",
          subcategory: this.props.sourceName,
          key: "file.secret",
          text:  secret
        })
       this.setState({"fileSecret": secret}) 
       this.setState({"fileHash": res.data.hash}) 

      })
      .catch(err => {
        console.log("err is:", err)
        this.setState({ "helpMessage":"Aw, snap! Something's wrong.."})
      });
  }

  handleChangeUpload (event){
    console.log('event.target.files[0]',event.target.files[0])
    this.setState({"filetoupload" : event.target.files[0],
      "helpMessage": "Click button below to upload selected file."})
  }


  handleSubmitDownload(event) {
    var data = new FormData();
    data.append("secret", this.state.fileSecret);
    data.append("fileMultihash", this.state.fileHash);
    // Download from ipfs
    console.log("Dowloading from IPFS.")
    axios.post('https://dnacoinstorage.com/fileDownload', data)
      .then(res => {
        console.log(res.data)
        })
      .catch(err => {
        console.log("err is:", err)
        alert('Download failed.')
      });
  }

  render(){
    var {badge, heading, description}= this.props.source
    //var ipfsUrl = 'https/ipfs.io/ipfs/'.concat(file.hash)
    return (
      <div style={{marginTop:'40px', marginBottom:'60px'}}>
        <Media>
          <Media.Left>
            <img width={64} height={64} src={badge} alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{heading}</Media.Heading> 
            <p>{description}</p>
            <form onSubmit={this.handleSubmitDownload}>
              {this.state.fileHash.length ? <div style={{color:'green',marginBottom:'10px'}}>File available <Button type='submit' bsStyle='success' bsStyle='xsmall'>here</Button></div>: ''}
            </form>
            <form onSubmit={this.handleSubmitUpload}>
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="Upload file"
                help= {this.state.helpMessage}
                onChange={this.handleChangeUpload}
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
