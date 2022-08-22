import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Patients from '../pages/Patients'

const Routespath = ()=> {
    return (
        <Switch>
            <Route exact path='/dashboard'>
              <Dashboard/>
            </Route>
            <Route path='/patients'>
              <Patients/>
            </Route>

        </Switch>
    )
}

export default Routespath
