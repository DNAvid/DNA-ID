var Radium = require('radium')
import React from 'react'
import { Image, Label, Button, Grid, Row, Col } from 'react-bootstrap'


export class FeaturesGridLogin extends React.Component {
  render(){
    return(
      <Grid>
        <Row>
          <Col md={4}>
            <h3> 
              Very soon! You'll get to try DNA\/ID 
            </h3> 
            <p> Invite family to join my DNA network</p>
            <p> Store my DNA information</p>
            <p> Control how my DNA is used:</p>

              <ul>
                <li> get paid? </li>
                <li> participate in research? </li>
                <li> get updated on research about me?</li>
                <li> want to limit sharing of my DNA to non-disease info?</li>
              </ul>
              <Button target="_blank" bsStyle="default" href="http://bb.dnavid.com/t/define-v1-of-dna-id/">Check the status</Button>
          </Col>
          <Col md={4}>
            <h3> 
              100% open source 
            </h3> 
            <p> It can't be any other way, if it's going to manage our DNA it's gotta be trusted and open</p>
            <p> Help shape the first genome management system that belongs to all</p>
            <p> Tackle the hard problems to create a scalable system of access that repects the individual. Unlock our DNA!</p>
            <Button target="_blank" bsStyle="default" href="https://github.com/DNAvid">Join the open source project</Button>
          </Col>
          <Col md={4}>
            <h3>Support DNAvID</h3>
            <p>Scan bitcoin address with bitcoin wallet app
              <Image src="https://storage.googleapis.com/dnavid/dnavidbitcoinaddress.png" style={{maxWidth:'33%'}} responsive />
              or send to address: <small>15UoJFGFzQcttWEUJUc8H41ZBvvg9JV1Zo</small>
            </p>
            <p>Support the project on AngelList</p>
            <Button target="_blank" bsStyle="default" href="https://angel.co/dnavid">Learn more</Button>&nbsp;
          </Col>
          {/*
          <Col md={4}>
            <h2>
              Join the discussion
            </h2> 
            <p>
              You have a DNA, no matter who or where you are, have your say!
            </p>
            <p>
              Join the global discussion about how we want our personal DNA data to be managed and used
            </p> 
            <p>
              <Button target="_blank" bsStyle="default" href="http://bb.dnavid.com/">Have your say</Button>&nbsp;
            </p>
          </Col>
            */}
          </Row>
          </Grid>
    )
  }
}


export default Radium(FeaturesGridLogin)
