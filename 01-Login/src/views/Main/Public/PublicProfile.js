import React from 'react'
import {ProgressBar, Media, Button, Image, Grid, Row, Col} from 'react-bootstrap'
var users = require('./users');

function WriteReport(props) {
  const questions = props.questions;
  const sharingPrefs = props.sharingPrefs;
  const listItems = questions.map((question) =>
    <li key={question.toString()}>
      {question+": "+ sharingPrefs[question].join(". ")+"."}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class DNAProfiles extends React.Component {
  render(){
    return(
      <div>
        <Media>
          <Media.Left>
            <img width={64} height={64} src="https://storage.googleapis.com/dnavid/23andmeBadge.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>23andMe genotyping</Media.Heading>
            <p>SNP genotyping from <a target="_blank" href="https://www.23andme.com">23 and Me</a>. Done on Illumina Illumina HumanOmniExpress-24 format chipwith custom probes.</p>
              <Button href={this.props.file}>Download</Button>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

class PercentFamily extends React.Component {
  render(){
    return(
      <div>
        Immediate DNA family - <small>3 out of 8 sharing their DNA</small>
        <ProgressBar label="3/8" bsStyle="info" now={37.5} />
                Extended DNA family - <small>8 out of 13 sharing their DNA</small>

        <ProgressBar label="8/13" bsStyle="info" now={61.5} />
      </div>
    )
  }
};


export class PublicProfile extends React.Component{
  render(){
    var user = this.props.params.user
    const sharingPrefs = users[user].sharingPreferences
    const questions = Object.keys(sharingPrefs);
    return(
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={3}><Image src={users[user].picture} thumbnail/></Col>
            <Col xs={9}><h1>{user}</h1>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>{users[user].bio}</Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <h4>You can use my DNA, but you must respect these conditions</h4> 
              <WriteReport sharingPrefs={sharingPrefs} questions={questions} />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <h4>
                Family 
              </h4> 
          <PercentFamily />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <h4>
                Data sources
              </h4> 
              <DNAProfiles file={users[user].dataSources["23andme"]}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PublicProfile
