import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthentication } from '../context/context'

export default function ProtectRoute({ redirect }) {
  const { user } = useAuthentication()

  return <>{user ? <Outlet /> : <Navigate to={redirect} />}</>
}
