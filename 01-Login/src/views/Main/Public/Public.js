var Radium = require('radium');
import { Link } from 'react-router'
import FooterLogin from '../Login/FooterLogin.js' 
import { Panel, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import React, { PropTypes as T } from 'react'
import AuthService from 'utils/AuthService'
import styles from '../Login/styles.module'

class Public extends React.Component{
  // These are checks
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render(){
    // See trick in Container.js to pass auth as props. 
    // Why not use the normal way of passing props??
    const auth = this.props.auth
    return(
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
              {/*Only difference between public header and  login header is link to Home Page*/}
              <NavItem><Link style={{color:'white'}} to="login">Home Page</Link></NavItem>
              <NavItem  target="_blank" eventKey={1} href="http://bb.dnavid.com" ><span style={{color:'white'}}>Engage</span></NavItem>
              <NavItem  target="_blank" eventKey={2} href="https://blog.dnavid.com" ><span style={{color:'white'}}>Blog</span></NavItem>
              <NavItem  target="_blank" eventKey={3} href="http://bb.dnavid.com/t/faq-frequently-asked-questions/46" ><span style={{color:'white'}}>FAQ</span></NavItem>
              {/* Binds login functions to keep this context
                  https://auth0.com/docs/quickstart/spa/react/01-login
                  */} 
                  <NavItem  eventKey={4} ><span style={{color:'white'}} onClick={auth.login.bind(this)}>Login</span></NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Panel style={{marginTop:'49px'}}> 
              {this.props.children}
            </Panel>
            <FooterLogin/>
          </div>
    )
  }
}

export default Radium(Public);
