var Radium = require('radium');
import { Image, Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap'
import React, { PropTypes as T } from 'react'
import {Button} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.js'

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

    function handleSelect(selectedKey) {
      alert('selected ' + selectedKey);
    }

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
              <NavItem  target="_blank" eventKey={1} href="http://bb.dnavid.com" ><span style={{color:'white'}}>Forum</span></NavItem>
              <NavItem  target="_blank" eventKey={2} href="https://blog.dnavid.com" ><span style={{color:'white'}}>Blog</span></NavItem>
              <NavItem  eventKey={3} >
                <span onClick={this.logout.bind(this)} style={{color:'white'}}>Logout</span>
              </NavItem>
              <NavItem  eventKey={4} >
                <span style={{color:'white'}}>
                  <Image src={profile.picture} style={{height:"17px"}} />&nbsp;{profile.name}
                </span>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Nav style={{marginTop:"50px", marginLeft:"25px"}} bsStyle="pills" activeKey={1} onSelect={handleSelect}>
          <NavItem eventKey={1} >Family</NavItem>
          <NavItem eventKey={2} title="Item">DNA</NavItem>
          <NavItem eventKey={3} >Share</NavItem>
          <NavItem eventKey={4} >Profile</NavItem>
        </Nav>
      </div>
    )
  }
}

export default Radium(Home);
