import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/blogs'
import Contact from '../pages/Contact'
import Admin from '../pages/Admin'
import PrivateRoute from './PrivateRoute'
import Privateroute2 from './Privateroute2'

const RouterComp = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact>
          <Home />
        </Route> */}
        <Route exact path="/" component={Home} />

        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>

        <Privateroute2 path="/blog" component={Blog} />
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export default RouterComp
