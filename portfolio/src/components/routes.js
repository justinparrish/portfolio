import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './landingPage'
import About from './about'
import Resume from './resume'
import Projects from './projects'
import ContactMe from './contact'

const routes = () => (
    <Router>
        <Switch>
            <Route exact path='/'component={LandingPage} />
            <Route path='/about' component={About} />
            <Route path='/resume' component={Resume} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={ContactMe} />
        </Switch>
    </Router>
)

export default routes