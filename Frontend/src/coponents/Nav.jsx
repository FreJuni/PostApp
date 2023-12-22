import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav-con'>
        <Link to="/">
        <h2>BLOG.io</h2>
        </Link>
        <div>
            <NavLink to="/">Post</NavLink>
            <NavLink to="/create-post">Create Post</NavLink>
        </div>
    </nav>
  )
}

export default Nav