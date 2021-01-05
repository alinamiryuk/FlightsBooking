import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { FlightsList } from './components/FlightsList/FlightsList'
import { Login } from './components/Login'

export const useRoutes = (auth) => {
  if (auth) {
    return (
      <Switch>
        <Route path="/" component={FlightsList} />
        <Redirect to="/" />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    )
  }
}
