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
              Health = Wealth 
            </h3>
            <ul>
              <li>
                The cost of keeping healthy keeps rising and depending more on information. Pharma pays 10s $M for access to DNA databases hoping to sell new drugs and diagnostics back to us. The math means the rise in costs will accelerate. 
              </li>
              <li>

                Instead of having many smaller DNA databases competing to sell access separately to pharma, let's build a community of all individuals that want to use and share their data on their terms.
              </li>
              <li>
                We get paid, get access to drugs, etc., in exchange for the use of our data. We can decide to pay companies to find solutions to our problems.
              </li>
              <li>
                Bottom line: more value is created and more fairly distributed.
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 style={subtitleStyle}> 

              Direct contact with health and wellness providers.
            </h3> 
            <p>
              We are using a powerful new tech, blockchain, that allows us to avoid middlemen by creating 
              <a target="_blank" href="https://blog.dnavid.com/dnacoin-b31d1619e462"> our own independent economy with our own currency: DNAcoin
              </a>
            </p>
            <p>
              There is no "company" wanting to squeeze our data, it's an <a target="_blank" href="https://github.com/DNAvid"> open source project owned by us all.</a>
            </p>

          </Col>
          <Col md={4}>
            <h3 style={subtitleStyle}> 
              Community-owned, first-come first-served, and merit-based </h3> 
            <p>
            DNA information value compounds immensely with the number and diversity of genomes we have to compare our own.
          </p>

            <p>
            The economic model of DNA\/ID rewards early adopters and participants.
          </p>
            <p>
              Each one chooses who can use our info, for what, and in exchange for what (return of info, access to treatments, etc.)
            </p>
          </Col>
        </Row>
      </Grid>

    )
  }
}


export default Radium(FeaturesGridLogin)
