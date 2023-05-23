import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Container, List } from './Styled'
import { theme } from '../../theme/theme'
import './style.css'

const Navbar = () => {
  const activeStyle = {
    color: theme.color.pink,
  }

  const navActive = ({ isActive }) => (isActive ? activeStyle : undefined)

  return (
    <>
      <Container>
        <List>
          <NavLink to='/' style={navActive}>
            Home
          </NavLink>
        </List>
        <List>
          <NavLink to='/about' style={navActive}>
            About
          </NavLink>
        </List>
        <List>
          <NavLink to='/findSongs' style={navActive}>
            Find Your Songs
          </NavLink>
        </List>
        <List>
          <NavLink to='/addSongs' style={navActive}>
            Add your Song Here
          </NavLink>
        </List>
        <List>
          <NavLink to='/login' style={navActive}>
            LogOut
          </NavLink>
        </List>
      </Container>
      <Outlet />
    </>
  )
}

export default Navbar
