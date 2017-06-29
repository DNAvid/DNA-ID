var Radium = require('radium');
import { Link, Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, ButtonToolbar, Button, ResponsiveEmbed } from 'react-bootstrap'
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
              <NavItem  target="_blank" eventKey={3} href="http://bb.dnavid.com/t/faq-frequently-asked-questions/46" ><span style={{color:'white'}}>FAQ</span></NavItem>
              {/* Binds login functions to keep this context
                  https://auth0.com/docs/quickstart/spa/react/01-login
                */} 
              <NavItem  eventKey={4} ><span style={{color:'white'}} onClick={auth.login.bind(this)}>Login</span></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron style={styles.jumbotronStyle}>
          <div style={styles.root}>
            <h1 style={styles.title} > 
              Earn DNACoin <br></br>
              Get better health
            </h1>
            <ButtonToolbar style={styles.toolbar}>
              <Button style={styles.buttonPrimary} bsSize="large" bsStyle="primary" onClick={auth.login.bind(this)}>Join</Button>
            </ButtonToolbar>
            <UserCount /> Have joined this network<br/> 

            <div style={{width:'100%', textAlign:'center'}}>

              <div style={{marginTop:"75px"}} >Invite others</div>

              <SocialShareButtons />


            </div>

          </div>
        </Jumbotron>
        <div style={styles.pitch}>
              Our DNA information, that we paid for, is sold for millions to companies, who then sell drugs, insurance, etc, back to us.
            <br></br>
            <br></br>
              Yet, healthcare is getting more expensive for less benefits
            <br></br>
            <br></br>
              With DNACoin, there's a better way
            <br></br>
            <br></br>
            <Button target="_blank" bsStyle="default" href="https://blog.dnavid.com/dnacoin-b31d1619e462">Learn more</Button>
        </div> 

        <div style={styles.sectionTitle}>
          How it works
        </div>

        <FeaturesGridLogin />
        <div style={styles.sectionTitle}>Features</div>
        <Features />
        <FooterLogin />
      </div>
    )
  }
}

export default Radium(Login);
