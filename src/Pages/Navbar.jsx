import React from 'react'
import { Link } from 'react-router-dom'
import { AllRoutes } from './AllRoutes'

export const Navbar = () => {
  return (
    <div>
        <Link style={{marginRight : "1rem"}} to="/">Home</Link>
        <Link style={{marginRight : "1rem"}} to="/posts">Posts</Link>
        <Link style={{marginRight : "1rem"}} to="/login">Login</Link>
        <AllRoutes/>
    </div>
  )
}
