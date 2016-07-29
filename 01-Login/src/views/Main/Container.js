var Radium = require('radium');
import React, { PropTypes as T } from 'react'
import { Jumbotron, Nav, Navbar, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap'
import styles from './styles.module.css'
import inlineStyles from './styles.module.js'
import SocialShareButtons from '../../containers/ShareButtons/ShareButtons.js'

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
                                <Navbar fixedTop>
                                        <Navbar.Header>
                                                <Navbar.Brand>
                                                        <a href="#">
                                                                <img style={inlineStyles.imgStyle} src="https://storage.googleapis.com/dnavid/logoDNAvID.png" />
                                                        </a>
                                                </Navbar.Brand>
                                                <Navbar.Toggle />
                                        </Navbar.Header>
                                        <Navbar.Collapse>
                                                <Nav pullRight>
                                                        <NavItem target="_blank" eventKey={2} href="https://medium.com/@davidweisss/f0e47e6c1173" >Learn more</NavItem>
                                                </Nav>
                                        </Navbar.Collapse>
                                </Navbar>
                                <Jumbotron style={inlineStyles.jumbotronStyle}>
                                        {children}
                                <div style={{width:'100%', textAlign:'center'}}>
                                        <span>Help spread the word!</span> 
                                        <SocialShareButtons style={{}}/>
                                </div>
                                </Jumbotron>
                                <hr/>

                                <Grid>
                                        <Row>
                                                <Col md={4}>
                                                        <h2>
                                                                Claim your DNA ID
                                                        </h2> 
                                                        <p>
                                                                Create your user profile and set your preferences for your DNA. 
                                                        </p>
                                                </Col>
                                                <Col md={4}>
                                                        <h2>
                                                                Ratings of DNA providers 
                                                        </h2> 
                                                        <p>
                                                                Before taking the jump and obtaining your DNA from 23andMe, AncestryDNA or the growing number of providers, check out in-depth review of their services and policies towards privacy and control of your DNA. 
                                                        </p>
                                                </Col>
                                                <Col md={4}>
                                                        <h2>
                                                                Protect your DNA 
                                                        </h2> 
                                                        <p>
                                                                Upload your DNA or use our forms to request access to your DNA data. 
                                                        </p>
                                                </Col>
                                        </Row>
                                </Grid>
                                <hr></hr>
                                <div>
                                        <footer>
                                                <p>© 2016 DNAvID</p>
                                        </footer>
                                </div>

                        </div>
                )
        }
}
export default Radium(Container);
