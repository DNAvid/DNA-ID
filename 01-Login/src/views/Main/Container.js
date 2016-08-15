var Radium = require('radium');
import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styles from './styles.module.css'
import inlineStyles from './styles.module.js'
import Footer from '../../containers/Footer/Footer.js' 
import FeaturesGridLogin from '../../containers/FeaturesGridLogin/FeaturesGridLogin' 
import HeaderLogin from '../../containers/HeaderLogin/HeaderLogin' 


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

        <HeaderLogin />

          {children}

        <Footer />

      </div>

    )
  }
}

export default Radium(Container);
