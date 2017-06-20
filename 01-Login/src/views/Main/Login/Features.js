import React from "react"
import {Button, Grid, Thumbnail, formGroup, ControlLabel, FormControl, HelpBlock, Image, Media, Row, Col} from 'react-bootstrap'

export class Features extends React.Component {
  render(){
    return(
      <Grid>
        <Row>
          <Col xs={6} md={6}>
            <Thumbnail src="https://storage.googleapis.com/dnavid/Feature1.png" alt="242x200">
              <h3>My DNA\/ID Homepage </h3>
              <p>My profile and personal information. We all have something to say about our DNA. Many in my family are tall, for example.</p>
              <p>
                <Button bsStyle="primary">Start</Button>&nbsp;
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={6}>
            <Thumbnail src="https://storage.googleapis.com/dnavid/Feature2.png" alt="242x200">
              <h3>Share my info, my way</h3>
              <p>Share with whom? What do I get?</p>
              <p>
                <Button bsStyle="primary">Start</Button>&nbsp;
              </p>
            </Thumbnail>
          </Col>
          <Col xs={12} md={12}>
            <Thumbnail src="https://storage.googleapis.com/dnavid/Feature3.png" alt="242x200">
              <h3>Invite family, engage with the comunnity</h3>
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
