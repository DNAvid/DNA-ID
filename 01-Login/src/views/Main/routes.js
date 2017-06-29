import React from 'react'
import LinkContainer from 'react-router-bootstrap'
import {Route, IndexRedirect} from 'react-router'
import AuthService from 'utils/AuthService'
import Container from './Container'
import Home from './Home/Home'
import Login from './Login/Login'
import Public from './Public/Public'
import PublicProfile from './Public/PublicProfile'
import Family from './Home/Family/Family'
import DNA from './Home/DNA/DNA'
import Share from './Home/Share/Share'
import Profile from './Home/Profile/Profile'

// Options passed to the auth0 modal widget to personalize 
var options = {
  theme: {
    logo: 'https://storage.googleapis.com/dnavid/logoDNAvID.png'
  },
  languageDictionary: {
    title: 'Sign up or Login'
  },
   initialScreen: 'signUp'
};

// The new operator creates an instance of a user-defined object type 
// or of one of the built-in object types that has a constructor function.
// https://github.com/auth0/lock
const auth = new AuthService('vmpiu8s34kIOU3E9ntS0yWtOkGnBuRZm', 'dnavid.auth0.com', options);

// onEnter callback to validate authentication in private routes
// 
// replace is the js manipulation function: 
// why is it passed as an argument??
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}
export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="home" />
      <Route path="login" component={Login} />
      <Route path="home" component={Home} onEnter={requireAuth}>
        <IndexRedirect to="profile" />
        <Route path="family" component={Family}/>
        <Route path="DNA" component={DNA}/>
        <Route path="share" component={Share}/>
        <Route path="profile" component={Profile}/>
      </Route>
      <Route path="public" component={Public}>
        <Route path=":user" component={PublicProfile}/>
      </Route>
    </Route>
  )
}

export default makeMainRoutes
