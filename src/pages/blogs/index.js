import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import BlogRouter from '../../routes/BlogRouter'
import './blog.css'
// import Cars from './Cars'
// import Dogs from './Dogs'
// import Recipes from './Recipes'

const Blog = () => {
  const { url } = useRouteMatch()
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link to={`${url}/dogs`}>Dogs</Link>
        </li>
        <li>
          <Link to={`${url}/cars`}>Cars</Link>
        </li>
        <li>
          <Link to={`${url}/recipes`}>Recipes</Link>
        </li>
      </ul>
      <BlogRouter />
      {/* <Switch>
        <Route path={`${path}/dogs`}>
          <Dogs />
        </Route>
        <Route path={`${path}/cars`}>
          <Cars />
        </Route>
        <Route path={`${path}/recipes`}>
          <Recipes />
        </Route>
      </Switch> */}
    </div>
  )
}

export default Blog
