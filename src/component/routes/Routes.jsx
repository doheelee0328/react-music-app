import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthentication } from '../context/Context'

export default function ProtectRoute({ redirect }) {
  const { user } = useAuthentication()

  return <>{user ? <Outlet /> : <Navigate to={redirect} />}</>
}
