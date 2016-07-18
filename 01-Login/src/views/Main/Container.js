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
                                <Nav>
                                <NavItem eventKey={1} href="#">Link</NavItem>
                                <NavItem eventKey={2} href="#">Link</NavItem>
                                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                                </Nav>
                                <Nav pullRight>
                                <NavItem eventKey={1} href="#">Link Right</NavItem>
                                <NavItem eventKey={2} href="#">Link Right</NavItem>
                                </Nav>
                                </Navbar.Collapse>
                                </Navbar>
                                <Jumbotron className={styles.mainJumbotron}>
                                <h2 className={styles.mainTitle}>
                                <img src="https://storage.googleapis.com/dnavid/dnavidLogo.png" />
                                </h2>
                                {children}
                </Jumbotron>
                        </div>
                        )
        }
}
export default Container;
