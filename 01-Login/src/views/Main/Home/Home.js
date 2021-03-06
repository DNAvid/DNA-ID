var Radium = require('radium');
import { Panel, Image, Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap'
import React, { PropTypes as T } from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import AuthService from '../../../utils/AuthService'
import styles from './styles.module.js'
import Profile from './Profile/Profile'


export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }
  static propTypes = {
    auth: T.instanceOf(AuthService)
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }
  logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
  }
  render(){
     var childrenWithAuth = React.Children.map(this.props.children, (child) => React.cloneElement(child, { auth: this.props.auth}));
    const { profile } = this.state
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
              <NavItem eventKey={2}>
                <Link style={{color:'white'}} to="/home/wallet">Wallet</Link>
              </NavItem>
              <NavItem eventKey={2}>
                <Link style={{color:'white'}} to="/home/share">Share</Link>
              </NavItem>
              <NavDropdown bsStyle='default' eventKey={3} title="Labs" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>
                  <Link to="/home/DNA">DNA</Link>
                </MenuItem>
                <MenuItem eventKey={3.2}>
                <Link to="/home/Family">Family</Link>
                </MenuItem>
              </NavDropdown>
              <NavItem  eventKey={4} >
                <Link style={{color:'white'}} to="/home/profile">
                  <Image src={profile.picture} style={{height:"17px"}} />&nbsp;{profile.name}
                </Link>
              </NavItem>
              <NavItem  eventKey={5}>
                <span onClick={this.logout.bind(this)} style={{color:'white'}}>Logout</span>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Panel style={{marginTop:'49px'}}>
          {childrenWithAuth[0]}
        </Panel>
      </div>
    )
  }
}

export default Radium(Home);
