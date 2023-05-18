import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/findSongs'>Find Your Songs</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default Navbar
