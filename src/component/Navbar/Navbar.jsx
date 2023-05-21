import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  const activeStyle = {
    textDecoration: 'underline',
    color: 'red',
  }

  const navActive = ({ isActive }) => (isActive ? activeStyle : undefined)

  return (
    <>
      <ul>
        <li>
          <NavLink to='/' style={navActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' style={navActive}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/findSongs' style={navActive}>
            Find Your Songs
          </NavLink>
        </li>
        <li>
          <NavLink to='/addSongs' style={navActive}>
            Add your Song Here
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' style={navActive}>
            LogOut
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default Navbar
