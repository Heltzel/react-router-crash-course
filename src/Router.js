import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'

const RouterComp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterComp
