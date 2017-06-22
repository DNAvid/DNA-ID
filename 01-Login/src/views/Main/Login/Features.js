import React from "react"
import {Button, Grid, Thumbnail, formGroup, ControlLabel, FormControl, HelpBlock, Image, Media, Row, Col} from 'react-bootstrap'


export class Features extends React.Component {

  render(){
    return(
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Thumbnail src="https://storage.googleapis.com/dnavid/Feature1.png" alt="242x200">
              <h3>My DNA Profile</h3>
              <p>Use to keep your personal, medical, and DNA info</p>
              <p>Share with family or doctors, or participate in research</p>
              <p>A great profile appears more often in searches, allowing you to participate in more research</p>
              <p>
                <Button bsStyle="primary">Start</Button>&nbsp;
              </p>
            </Thumbnail>
          </Col>
          <Col xs={12} md={12}>
            <Thumbnail src="https://storage.googleapis.com/dnavid/Feature2.png" alt="242x200">
              <h3>Share my info, my way</h3>
              <p>Share with whom? What do I get?</p>
              <p>I want to get DNACoin if someone uses my info</p>
              <p>I want to pay DNACoin if someone uses my info to study a disease that I have</p>
              <p>
                <Button bsStyle="primary">Start</Button>&nbsp;
              </p>
            </Thumbnail>
          </Col>
          <Col xs={12} md={12}>
            <Thumbnail src="https://storage.googleapis.com/dnavid/Feature3.png" alt="242x200">
              <h3>Your DNA profile and personal network</h3>
              <p>Be present online with your DNA, while staying in full control</p>
              <p>A few persons from my family joining, greatly increase what can be known from my DNA</p>
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

