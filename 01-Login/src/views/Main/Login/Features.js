import React from "react"
import {Button, Grid, Thumbnail, formGroup, ControlLabel, FormControl, HelpBlock, Image, Media, Row, Col} from 'react-bootstrap'


export class Features extends React.Component {

  render(){
    return(
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Thumbnail src="https://storage.googleapis.com/dnavid/FeatureProfile.png" alt="242x200">
              <h3>Your DNA profile and personal network</h3>
              <p>Be present online with your DNA, while staying in full control</p>
              <p>A great profile appears more often in searches, allowing you to participate in more research</p>
              <p>
                <Button bsStyle="primary">Start</Button>&nbsp;
              </p>
            </Thumbnail>
          </Col>
          <Col xs={12} md={12}>
            <Thumbnail src="https://storage.googleapis.com/dnavid/FeatureWallet.jpg" alt="242x200">
              <h3>My DNAcoin Wallet</h3>
              <p>Keep track of your balance and gains</p>
              <p>I want to get DNAcoin if someone uses my info</p>
              <p>I want to pay DNAcoin if someone uses my info to study a disease that I have or care about</p>
              <p>
                <Button bsStyle="primary">Start</Button>&nbsp;
              </p>
            </Thumbnail>
          </Col>
          <Col xs={12} md={12}>
            <Thumbnail src="https://storage.googleapis.com/dnavid/FeatureShare.png" alt="242x200">
              <h3>Share my info, my way</h3>
              <p>Share with whom? What do I get?</p>
              <p>
                <Button bsStyle="primary">Start</Button>&nbsp;
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>

    )
  }
}
export default Features

