import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Page from 'modules/Page/Container/index'
import { authenticated } from 'routes/config/user'
import Flex from 'components/Flex'
import styled from 'styled-components'

const PageFlex = styled(Flex)`
  overflow: hidden;
`
const AuthPage = ({ isAuthenticated }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/user/signin')
    }
  }, [isAuthenticated])

  return (
    <PageFlex>
      {isAuthenticated && (
        <>
          <Page>
            <Routes>
              {authenticated.map(({ routePath, Component }) => {
                return (
                  <Route
                    key={routePath}
                    path={routePath}
                    element={<Component />}
                  ></Route>
                )
              })}
            </Routes>
          </Page>
        </>
      )}
    </PageFlex>
  )
}

export default AuthPage
