import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './landingPage'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'
import ContactMe from './Contact'

const routes = () => (
    <Router>
        <Switch>
            <Route exact path='/'component={LandingPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={ContactMe} />
        </Switch>
    </Router>
)

export default routes