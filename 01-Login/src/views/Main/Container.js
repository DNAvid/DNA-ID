var Radium = require('radium');
import React, { PropTypes as T } from 'react'
import { Label, Button, Thumbnail, Image, Table, ProgressBar,  Jumbotron, Nav, Navbar, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap'
import styles from './styles.module.css'
import inlineStyles from './styles.module.js'
import SocialShareButtons from '../../containers/ShareButtons/ShareButtons.js'
import UserCount from '../../containers/UserCount/UserCount.js'


export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <div>
        <Navbar fixedTop style={inlineStyles.navbarStyle}>
          <Navbar.Header style={inlineStyles.headerStyle} >
            <Navbar.Brand>
              <a href="#">
                <img style={inlineStyles.brandStyle} src="https://storage.googleapis.com/dnavid/logoDNAvIDWhite.png" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem  target="_blank" eventKey={2} href="http://bb.dnavid.com" ><span style={{color:'white'}}>Forum</span></NavItem>
              <NavItem  target="_blank" eventKey={2} href="https://medium.com/@davidweisss/f0e47e6c1173" ><span style={{color:'white'}}>But, "Why?"</span></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron style={inlineStyles.jumbotronStyle}>
          {children}
          <div style={{width:'100%', textAlign:'center'}}>
            <UserCount/> Humans and counting<br></br><br></br><br></br>
            <span>Help grow the community by sharing with friends and colleagues</span> 
            <SocialShareButtons/>
          </div>
        </Jumbotron>


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
        <hr/>


        <div style={{width:'100%', textAlign:'center'}}>
          <footer>
            <p>© 2016 DNAvID &mdash; <a href="https://angel.co/dnavid" target="_blank">Company profile</a></p>
          </footer>
        </div>
      </div>

    )
  }
}

export default Radium(Container);
