import React, { PropTypes as T } from 'react'
import { Jumbotron, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import styles from './styles.module.css'

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
                                                        <a href="#">DNAvid</a>
                                                </Navbar.Brand>
                                                <Navbar.Toggle />
                                        </Navbar.Header>
                                        <Navbar.Collapse>
                                                <Nav pullRight>
                                                        <NavItem  target="_blank" eventKey={1} href="https://medium.com/@davidweisss/8c49a67330ba">My DNA copyright</NavItem>
                                                        <NavItem target="_blank" eventKey={2} href="https://medium.com/@davidweisss/f0e47e6c1173" >Roadmap</NavItem>
                                                </Nav>
                                        </Navbar.Collapse>
                                </Navbar>
                                <Jumbotron className={styles.mainJumbotron}>
                                        <h2 className={styles.mainTitle}>
                                                <img src="https://storage.googleapis.com/dnavid/logoDNAvidBlue.png" />
                                        </h2>
                                        {children}
                                </Jumbotron>
                        </div>
                )
        }
}
export default Container;
