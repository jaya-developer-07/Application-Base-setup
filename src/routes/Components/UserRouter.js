import React, { Fragment } from 'react'
import AuthRouter from './AuthRouter'
import { anonymous } from 'routes/config/user'
import { Routes, Route } from 'react-router-dom'

const UserRouter = ({ isAuthenticated }) => {
  return (
    <Fragment>
      <Routes>
        {anonymous.map(({ routePath, Component }) => {
          return (
            <Route
              key={routePath}
              path={routePath}
              element={<Component />}
            ></Route>
          )
        })}
      </Routes>
      <AuthRouter isAuthenticated={isAuthenticated} />
    </Fragment>
  )
}

export default UserRouter
