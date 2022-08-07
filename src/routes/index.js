import React from 'react'
import UserRouter from 'routes/Components/UserRouter'
import { Navigate } from 'react-router-dom'
import { Routes, Route } from 'react-router'

const Routers = ({ token }) => {
  const isAuthenticated = Boolean(token)
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user" replace />} />
      <Route
        path="user/*"
        element={<UserRouter isAuthenticated={isAuthenticated} />}
      />
    </Routes>
  )
}

export default Routers
