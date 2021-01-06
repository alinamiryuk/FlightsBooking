import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { FlightsPage } from './components/FlightsPage/FlightsPage'
import { LoginPage } from './components/LoginPage/LoginPage'

export const useRoutes = (auth) => {
  if (auth) {
    return (
      <Switch>
        <Route path="/" component={FlightsPage} />
        <Redirect to="/" />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Redirect to="/login" />
      </Switch>
    )
  }
}
