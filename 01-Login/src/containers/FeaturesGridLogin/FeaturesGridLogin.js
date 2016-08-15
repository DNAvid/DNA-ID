var Radium = require('radium')
import React from 'react'
import { Label, Button, Grid, Row, Col } from 'react-bootstrap'


export class FeaturesGridLogin extends React.Component {
  render(){
    return(
      <Grid>
        <Row>
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
          <Col md={4}>
            <h2> 
              Claim your DNA ID  
            </h2> <Label>Coming soon</Label><br></br>
            <p> Store your genome data</p>
            <p> Decide what can be used in your genome and for what</p>
            <p> Safe sharing: anonymise, share only parts, hide parts, of your genome</p>
            <Button target="_blank" bsStyle="default" href="http://bb.dnavid.com/">Help define the product</Button>
          </Col>
          <Col md={4}>
            <h2> 
              100% open source 
            </h2> 
            <p> Everything is open to contributons, even this page.</p>
            <p> Help shape the first genome management system that belongs to all</p>
            <p> Tackle the hard problems to create a scalable system of access that repects the individual. Unlock our DNA!</p>
            <Button target="_blank" bsStyle="default" href="https://github.com/DNAvid">Join the open source project</Button>
          </Col>
          {/*
            <Col xs={6} md={4}>
            <Thumbnail src="https://storage.googleapis.com/dnavid/dnavidbitcoinaddress.png" alt="242x200">
            <h3>Support DNAvID! </h3>
            <p>Scan Bitcoin Address with Bitcoin Wallet App.</p>
            <p>
            <Button target="_blank" bsStyle="default" href="http://bb.dnavid.com/">Learn more</Button>&nbsp;
            </p>
            </Thumbnail>
            </Col>
            */}
          </Row>
          </Grid>
    )
  }
}


export default Radium(FeaturesGridLogin)
