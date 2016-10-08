var Radium = require('radium')
import React, { PropTypes as T } from 'react'
import AuthService from '../../utils/AuthService'
import { Jumbotron, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import styles from './styles.module.js'

export class HeaderLogin extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render(){
    const { auth } = this.props
    return(
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
            <NavItem  target="_blank" eventKey={2} href="http://bb.dnavid.com" ><span style={{color:'white'}}>Forum</span></NavItem>
            <NavItem  target="_blank" eventKey={2} href="https://medium.com/@davidweisss/f0e47e6c1173" ><span style={{color:'white'}}>But, "Why?"</span></NavItem>
            <NavItem  target="_blank" eventKey={2} href="https://medium.com/@davidweisss/f0e47e6c1173" ><span style={{color:'white'}} onClick={auth.login.bind(this)}>Login</span></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}


export default Radium(HeaderLogin)
