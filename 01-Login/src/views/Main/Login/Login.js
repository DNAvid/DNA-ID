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
      border:"solid 0px purple", 
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
              <NavItem  target="_blank" eventKey={3} href="http://bb.dnavid.com/t/faq-frequently-asked-questions" ><span style={{color:'white'}}>FAQ</span></NavItem>
              <NavItem  target="_blank" eventKey={2} href="https://blog.dnavid.com" ><span style={{color:'white'}}>Blog</span></NavItem>
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
                        <Button bsSize="large" bsStyle="primary" style={{textAlign:"center",backgroundColor:"purple", borderColor:'purple', fontWeight:'bold'}} onClick={auth.login.bind(this)}>Start ></Button>
                      </Col>
                      <Col xs={2} sm={2} md={2} lg={2}>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={1} sm={3} md={3} lg={3}>
                  </Col>
              </Row>             </div>
            </Jumbotron>


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
