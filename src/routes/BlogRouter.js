import React from 'react'
import { Switch, useRouteMatch, Route } from 'react-router-dom'
import Cars from '../pages/blogs/Cars'
import Dogs from '../pages/blogs/Dogs'
import Recipes from '../pages/blogs/Recipes'

const BlogRouter = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/dogs`}>
        <Dogs />
      </Route>
      <Route path={`${path}/cars`}>
        <Cars />
      </Route>
      <Route path={`${path}/recipes`}>
        <Recipes />
      </Route>
    </Switch>
  )
}

export default BlogRouter
