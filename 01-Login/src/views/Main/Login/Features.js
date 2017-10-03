import React from "react"
import {Button, Grid, formGroup, ControlLabel, FormControl, HelpBlock, Image, Media, Row, Col} from 'react-bootstrap'


export class Features extends React.Component {
  render(){
    return(
      <Grid>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Col xs={1} sm={1} md={1} lg={1}> </Col>
          <Col xs={10} sm={10} md={10} lg={10}>
            <h3 style={{color:'purple'}}>DNAcoin Wallet</h3>
            <Image src="https://storage.googleapis.com/dnavid/FeatureWallet.jpg" responsive/>
            <div style={{paddingTop: '15px',
              paddingLeft: '15px',
              paddingBottom: '15px',
              paddingRight: '15px'}}>
              <p>Get DNAcoin if someone uses my info, for example, for profit</p>
              <p>Pay DNAcoin if someone uses my info to study a disease that I have or care about</p>
            </div>
          </Col>
          <Col xs={1} sm={1} md={1} lg={1}> </Col>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Col xs={1} sm={1} md={1} lg={1}> </Col>
          <Col xs={10} sm={10} md={10} lg={10}>
            <h3 style={{color:'purple'}}>Share my info, my way</h3>
            <Image src="https://storage.googleapis.com/dnavid/FeatureShare.png" responsive/>
            <div style={{paddingTop: '15px',
              paddingLeft: '15px',
              paddingBottom: '15px',
              paddingRight: '15px'}}>
              <p>Share with whom? What do I get in return?</p>
              <p>Detailed ownership and control settings</p>
            </div>
          </Col>
          <Col xs={1} sm={1} md={1} lg={1}> </Col>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Col xs={1} sm={1} md={1} lg={1}> </Col>
          <Col xs={10} sm={10} md={10} lg={10}>
            <h3 style={{color:'purple'}}>Your DNA profile and personal network</h3>
            <Image src="https://storage.googleapis.com/dnavid/FeatureProfile.png" responsive/>
            <div style={{paddingTop: '15px',
              paddingLeft: '15px',
              paddingBottom: '15px',
              paddingRight: '15px'}}>
              <p>Be present online with your DNA.</p>
              <p>A great profile appears more often in searches, allowing you to participate in more research</p>
            </div>
          </Col>
          <Col xs={1} sm={1} md={1} lg={1}> </Col>
        </Col>
      </Grid>
    )
  }
}

export default Features
