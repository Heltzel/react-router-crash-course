import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedin } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedin ? children : <Redirect to="/" />
      }}
    />
  )
}

export default PrivateRoute
