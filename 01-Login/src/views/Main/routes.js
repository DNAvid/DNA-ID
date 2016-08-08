import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from 'utils/AuthService'
import Container from './Container'
import Home from './Home/Home'
import Login from './Login/Login'

var options = {
          theme: {
                  logo: 'https://storage.googleapis.com/dnavid/logoDNAvID.png'
          },
          title: 'Login'
};

const auth = new AuthService('vmpiu8s34kIOU3E9ntS0yWtOkGnBuRZm', 'dnavid.auth0.com', options);

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
        return (
          <Route path="/" component={Container} auth={auth}>
                  <IndexRedirect to="/home" />
                  <Route path="home" component={Home} onEnter={requireAuth} />
                  <Route path="login" component={Login} />
                  <Route path="access_token=:token" component={Login} /> //to prevent router errors
          </Route>

  )
}

export default makeMainRoutes
