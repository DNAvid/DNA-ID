var Radium = require('radium')
import React from 'react'


export class Footer extends React.Component {
  render(){
    return(
        <div style={{width:'100%', textAlign:'center'}}>
          <footer>
            <p>© 2016 DNAvID &mdash; <a href="https://angel.co/dnavid" target="_blank">Company profile</a></p>
          </footer>
        </div>
    )
  }
}
export default Radium(Footer)
