import React from 'react'
import RouterComp from './routes/Router'
import './app.css'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <RouterComp />
      </AuthContextProvider>
    </>
  )
}

export default App
