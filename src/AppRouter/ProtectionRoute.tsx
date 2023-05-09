import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Home from '../components/Home/Home'
import NewsSearch from '../components/NewsSearch/NewsSearch'

interface IprotectedRouteProps {
  auth: any
  children: React.ReactNode
}

const ProtectionRoute = ({ auth, children }: IprotectedRouteProps) => {
  return <> {auth ? children : <Navigate replace to={'/'} />}</>


}

export default ProtectionRoute
