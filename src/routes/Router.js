import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/blogs'
import Contact from '../pages/Contact'
import Admin from '../pages/Admin'

const RouterComp = () => {
  return (
    <Router>
      <Navbar />
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
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterComp
