var Radium = require('radium')
import React from 'react'


export class FooterLogin extends React.Component {
  render(){
    return(
        <div style={{width:'100%', textAlign:'center'}}>
          <footer>
            <p>For all of us, by DNA\/ID &mdash; <a href="https://angel.co/dnavid" target="_blank">Organization profile</a></p>
          </footer>
        </div>
    )
  }
}
export default Radium(FooterLogin)
