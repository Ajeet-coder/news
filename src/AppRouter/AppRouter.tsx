import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from '../components/Login/Login'
import Register from '../components/register/Register'
import Home from '../components/Home/Home'
import NewsSearch from '../components/NewsSearch/NewsSearch'
import ProtectionRoute from './ProtectionRoute'
import NewsDetails from '../components/NewsDetails/NewsDetails'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import { ErrorBoundary } from '../components/ErrorBoundry/ErrorBoundary '


const AppRouter = () => {

  const auth = localStorage.getItem("access_token");
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route
        path='/home'
        element={
          <ProtectionRoute><Home /></ProtectionRoute>
        } />
      <Route
        path='/details/:index'
        element={
          <ProtectionRoute><NewsDetails /></ProtectionRoute>
        } />

      <Route
        path='/search'
        element={
          <ProtectionRoute > <NewsSearch /></ProtectionRoute>} />
      <Route path='/' element={
      // <ErrorBoundary>
      <Login />
      // </ErrorBoundary>
      } />
      <Route path="*" element={<PageNotFound />} />

    </Routes>
  )
}

export default AppRouter
