import React, { Fragment } from 'react'
import AuthPage from 'routes/Components/AuthPage'
import { Navigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const AuthRouter = ({ isAuthenticated }) => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="signin" replace />} />
      </Routes>
      <AuthPage isAuthenticated={isAuthenticated} />
    </Fragment>
  )
}

export default AuthRouter
