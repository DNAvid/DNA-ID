var Radium = require('radium');
import React, { PropTypes as T } from 'react'
import { Button, Thumbnail, Image, Table, ProgressBar,  Jumbotron, Nav, Navbar, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap'
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
                                                                <img style={inlineStyles.brandStyle} src="https://storage.googleapis.com/dnavid/logoDNAvID.png" />
                                                        </a>
                                                </Navbar.Brand>
                                                <Navbar.Toggle />
                                        </Navbar.Header>
                                        <Navbar.Collapse>
                                                <Nav pullRight>
                                                        <NavItem  target="_blank" eventKey={2} href="https://medium.com/@davidweisss/f0e47e6c1173" ><span style={{color:'white'}}>But, "Why?"</span></NavItem>
                                                </Nav>
                                        </Navbar.Collapse>
                                </Navbar>
                                <Jumbotron style={inlineStyles.jumbotronStyle}>
                                        {children}
                                        <div style={{width:'100%', textAlign:'center'}}>
                                                <UserCount/> Signups and counting<br></br><br></br>
                                                <span>Help grow the community by sharing</span> 
                                                <SocialShareButtons/>
                                        </div>
                                </Jumbotron>


                                <Grid>
                                        <Row>
                                                <Col md={4}>
                                                        <h2> 
                                                                Claim your DNA ID
                                                        </h2> 
                                                        <p>
                                                                Protect your DNA 
                                                        </p>
                                                        <p>
                                                                Upload your DNA file or import from 3rd party
                                                        </p>
                                                        <p>
                                                                Request access to your DNA data (vendor, doctor, research study, etc.). 
                                                        </p>

                                                </Col>
                                                <Col md={4}>
                                                        <h2>
                                                                Join the discussion
                                                        </h2> 
                                                        <p>
                                                                One DNA is one vote, no matter who or where you are
                                                        </p>
                                                        <p>
                                                                Ratings of DNA providers 23andMe, AncestryDNA, clinical, etc.
                                                                review services and policies towards privacy and control of your DNA. 
                                                        </p> 
                                                        <p>
                                                                <Button bsStyle="primary">Button</Button>&nbsp;
                                                                <Button bsStyle="default">Button</Button>
                                                        </p>

                                                </Col>
                                                <Col xs={6} md={4}>
                                                        <Thumbnail src="https://storage.googleapis.com/dnavid/dnavidbitcoinaddress.png" alt="242x200">
                                                                <h3>Support DNAvID! </h3>
                                                                <p>Scan Bitcoin Address with Bitcoin Wallet App.</p>
                                                                <p>
                                                                        <Button bsStyle="primary">Button</Button>&nbsp;
                                                                        <Button bsStyle="default">Button</Button>
                                                                </p>
                                                        </Thumbnail>
                                                </Col>
                                        </Row>
                                </Grid>
                                <hr/>
                               

                                <div style={{width:'100%', textAlign:'center'}}>
                                        <footer>
                                                <p>© 2016 DNAvID</p>
                                        </footer>
                                </div>
                        </div>

                )
        }
}

export default Radium(Container);
