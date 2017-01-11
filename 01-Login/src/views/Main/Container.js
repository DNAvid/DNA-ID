var Radium = require('radium');
import React, { PropTypes as T } from 'react'

// Higher-level component on higher-level route
// (defined in src/views/Main/routes.js)
export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }
  render() {
    // The result of this block is: children = (children + props) 
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Radium(Container);
