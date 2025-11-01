import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h1>SiColor</h1>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/palette'>palette</Link>
            <Link to='/gradient'>gradient</Link>
        </nav>
    </div>
  )
}

export default Header
