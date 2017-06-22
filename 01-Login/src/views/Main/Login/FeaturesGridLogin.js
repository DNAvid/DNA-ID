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
              Members own this website, and benefit from it</h3> 
            <ul>
              <li>We set the rules, building our own true democracy</li><li>
                We set the terms of use of our info to
                <ul>
                  <li>Get a share of the profits when our info is used   
                  </li>
                  <li>
                    Use our DNACoin to pay for studies we need or want
                  </li>
                  <li>
                    Get priority access to new discoveries </li>
                </ul>
            </li>
          </ul>

          </Col>
          <Col md={4}>
            <h3> 
              Members who help improve the network get paid DNACoin
            </h3> 
            <p>By joining, adding DNA info, improving your profile and showing up in results</p>
            <p>By inviting family and friends</p>
            <p>By contributing to the open source project</p>
            <p>By helping to steer the community and help its outreach</p>
          </Col>
          <Col md={4}>
                 <h3>Buy and sell DNACoin</h3>
                   <p>Buy to use the network, eg, for diagnostics or drug development</p>
                   <p>Buy as an investment: DNACoin can appreciate significantly as the network grows</p>
                   <p>Sell to cash out your DNACoin earnings</p>
          </Col>
          </Row>
          </Grid>

    )
  }
}


export default Radium(FeaturesGridLogin)
