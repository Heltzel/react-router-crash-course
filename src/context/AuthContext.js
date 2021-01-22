import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [isLoggedin, setIsLoggedin] = useState(false)
  return (
    <AuthContext.Provider value={{ isLoggedin, setIsLoggedin }}>
      {props.children}
    </AuthContext.Provider>
  )
}
