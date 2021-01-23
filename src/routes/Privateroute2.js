import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Privateroute2 = ({ component: Component, ...rest }) => {
  const { isLoggedin } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedin ? <Component {...props} /> : <Redirect to="/" />
      }}
    />
  )
}

export default Privateroute2
