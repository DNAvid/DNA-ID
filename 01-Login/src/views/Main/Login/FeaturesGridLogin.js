var Radium = require('radium')
import React from 'react'
import { Image, Label, Button, Grid, Row, Col } from 'react-bootstrap'


export class FeaturesGridLogin extends React.Component {
  render(){
    var subtitleStyle = {color:"purple"}
    return(
      <Grid>
        <Row>
          <Col md={4}>
            <h3 style={subtitleStyle}> 
            Forget all you know, this is different</h3> 
          <p>
            We are using an amazing new tech, blockchain, that allows us to create  
            <a target="_blank" href="https://blog.dnavid.com/dnacoin-b31d1619e462"> our own independent economy with our own currency: DNAcoin
            </a>
          </p>
          <p>
            There is no "company" wanting to squeeze our data, it's an <a target="_blank" href="https://github.com/DNAvid"> open source project owned by us all</a>
          </p>
          <p>
            This time it will be pharma cos and others asking to access our data - we get to choose and set the conditions.
          </p>

          </Col>
          <Col md={4}>
            <h3 style={subtitleStyle}> 
              First-come first-served, and merit-based </h3> 
            <ul>
              <li>
                When others join later, they'll benefit from adding their data to ours and from what we've built, thus early joiners get much more: 
                <ul>
                  <li> A higher welcome bonus
                  </li>
                  <li>
                    Every hour new DNAcoin is distributed to members as a proportion of their DNAcoin holdings, meaning your stack compounds like with interest 
                  </li>
                  <li>
                    If you have special skills like programming, outreach, data analysis etc. the network pays you DNAcoin in exchange for your help
                  </li>
                </ul>
            </li>
          </ul>

          </Col>
          <Col md={4}>
            <h3 style={subtitleStyle}>
            I'm DNAcoin rich &mdash; now what?
            </h3>
                   <p>Pharma, doctors, etc. will need DNAcoin to access the data in the network at prices set by us (can be free). Pharma pays 10s of millions USD for licenses to large DNA health databases. If we grow enough; DNAcoin could strongly appreciate.</p>
                   <p>Touchin wood (toc, toc) - if a disease may strike you or a loved one, DNAcoin can be pledged for a specific disease, making it more attractive for drug development, and ensuring you are part of the "new hope" study</p>
          </Col>
          </Row>
          </Grid>

    )
  }
}


export default Radium(FeaturesGridLogin)
