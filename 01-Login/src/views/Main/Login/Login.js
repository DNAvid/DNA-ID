var Radium = require('radium');
import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button, Jumbotron} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module'
import UserCount from '../../../containers/UserCount/UserCount'
import SocialShareButtons from '../../../containers/ShareButtons/ShareButtons'
import FeaturesGridLogin from '../../../containers/FeaturesGridLogin/FeaturesGridLogin' 

export class Login extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div>
        <Jumbotron style={styles.jumbotronStyle}>
          <div style={styles.root}>
            <h1 style={styles.title} >Claim your genome</h1>
            <ButtonToolbar style={styles.toolbar}>
              <Button style={styles.buttonPrimary} lock bsSize="large" bsStyle="primary" onClick={auth.login.bind(this)}>Join the Community</Button>
            </ButtonToolbar>
            <p>
              <UserCount/> Humans and counting
            </p>
            <p>or<br />
            <ButtonToolbar style={styles.toolbar}>
              <Button style={styles.buttonSecondary} block bsSize="default" bsStyle="info" onClick={auth.login.bind(this)}>Stay informed</Button>
            </ButtonToolbar>
            </p>
            <div style={{width:'100%', textAlign:'center'}}>
              <span>Help grow the community by sharing with friends and colleagues</span> 
              <SocialShareButtons/>
            </div>
          </div>
        </Jumbotron>
        <FeaturesGridLogin />
      </div>
    )
  }
}

export default Radium(Login);
