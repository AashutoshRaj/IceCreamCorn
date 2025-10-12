import { useState } from 'react'
import './App.css'
import RoutingConfig from './RoutingConfig'
import AuthProvider from './ContextAPI/AuthContext'

function App() {
  return (
    <>
   
    <AuthProvider>
        <RoutingConfig/>    
    </AuthProvider>
    </>
  )
}

export default App
