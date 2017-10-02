var Radium = require('radium');
import { Link, Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, ButtonToolbar, Button, ButtonGroup, ResponsiveEmbed, Row, Col} from 'react-bootstrap'
import React, { PropTypes as T } from 'react'
import AuthService from 'utils/AuthService'
import styles from './styles.module'
import UserCount from './UserCount'
import SocialShareButtons from './ShareButtons'
import FeaturesGridLogin from './FeaturesGridLogin' 
import FooterLogin from './FooterLogin' 
import Features from './Features' 

export class Login extends React.Component {
  // These are checks
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }


  render() {
    // See trick in Container.js to pass auth as props. 
    // Why not use the normal way of passing props??
    const auth = this.props.auth
    // Styles
    var boxStyle  = {
      border:"solid 0px black", 
      borderRadius:"7px",
      marginLeft:"40px",
      marginTop:"55px",
      marginBottom:"25px",
      marginRight:"40px"
    }



    return (
      <div>
        <Navbar fixedTop style={styles.navbarStyle}>
          <Navbar.Header style={styles.headerStyle} >
            <Navbar.Brand>
              <a href="#">
                <img style={styles.brandStyle} src="https://storage.googleapis.com/dnavid/logoDNAvIDWhite.png" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem  target="_blank" eventKey={2} href="https://blog.dnavid.com" ><span style={{color:'white'}}>Blog</span></NavItem>
              <NavItem  target="_blank" eventKey={3} href="http://bb.dnavid.com/t/faq-frequently-asked-questions" ><span style={{color:'white'}}>FAQ</span></NavItem>
              {/* Binds login functions to keep this context
                  https://auth0.com/docs/quickstart/spa/react/01-login
                  */} 
                  <NavItem  eventKey={4} ><span style={{color:'white'}} onClick={auth.login.bind(this)}>Login</span></NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Jumbotron style={styles.jumbotronStyle}>
              <div style={{textAlign:'center'}}>
                <Row >
                  <Col xs={1} sm={3} md={3} lg={3}>
                  </Col>
                  <Col xs={10} sm={6} md={6} lg={6}>
                    <Row>
                      <h1 style={styles.title} > 
                      Health and wellbeing 2.0
                      </h1>
                    </Row>
                    <Row > 
                      <Col xs={2} sm={2} md={2} lg={2}>
                      </Col>
                      <Col xs={8} sm={8} md={8} lg={8}>
                          <Button bsSize="large" bsStyle="primary" style={{textAlign:"center",backgroundColor:"purple"}} onClick={auth.login.bind(this)}>Join</Button>
                      </Col>
                      <Col xs={2} sm={2} md={2} lg={2}>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={1} sm={3} md={3} lg={3}>
                  </Col>
              </Row>             </div>
            </Jumbotron>

            <Row >
              <div style={styles.sectionTitle}>
                Is this site for me?
              </div>
            </Row>
            <Row>
              <Col xs={1} sm={3} md={3} lg={3}>
              </Col>
              <Col xs={10} sm={6} md={6} lg={6}>
                <div >
                  <h3 style={styles.pitch}> 
                    Medicine costs more and more for less health and wellbeing.                    
                    <br></br>
                    <br></br>
                    Folks finding medical scientists to look at their health and DNA info have dodged diagnosis death sentences.<br></br>
                    <br></br>
                    Yet, only after a pharma company has developed a drug or diagnostic can we pay for a new drug/diagnostic.
                    <br></br>
                    <br></br>
                    Beyond health, DNA can inform how best to eat, exercise, sleep, etc. if only we could openly study humanity's DNA without the burden of entrenched interests.                     <br></br>
                    <br></br>
                    If you believe we can be smarter and build a network of individuals, scientists and doctors, this site is for you. Start now, reap lifelong benefits.

                  </h3>
                  <br></br>
                </div> 
              </Col>
              <Col xs={1} sm={3} md={3} lg={3}>
              </Col>
            </Row>

            <FeaturesGridLogin />
            <div style={styles.sectionTitle}>Features</div>
            <Features />
            <Row style={{textAlign:"center"}} style={boxStyle}>
              <Col md={6}>
                <Row>
                  <div style={{ color:"green", textAlign:"center"}}><br></br> Hurry! Welcome reward decreases after 100 members.</div>
                </Row>
                <Row style={{textAlign:"center",borderRadius:"5px"}}> <UserCount /> Members 
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <div style={{color:"green", textAlign:"center"}}>
                    Share and earn 10 DNAcoin/referal when they mention your user name.
                  </div>
                </Row>
                <Row style={{textAlign:"center"}}>
                  <SocialShareButtons />
                </Row>
              </Col>
            </Row>
            <FooterLogin />
          </div>
    )
  }
}

export default Radium(Login);
