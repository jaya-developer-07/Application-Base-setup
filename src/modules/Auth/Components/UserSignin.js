import React, { useEffect } from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import SignInForm from './SignInForm'
import { useNavigate } from 'react-router-dom'

export const Wrapper = styled(Flex)`
  height: 100vh;
  width: 100%;
  background-color: #f6f6f6;
`

const SignInCard = styled.div`
  background-color: white;
  padding: 40px 32px;
  border-radius: 3px;
  max-width: 450px;
  width: 100%;
  margin: auto;
  box-shadow: 0px 2px 10px rgba(99, 116, 135, 0.2);
`

const UserSignin = ({ token, SignIn }) => {
  const navigate = useNavigate()

  const handleSignIn = data => {
    SignIn(data)
  }

  useEffect(() => {
    if (token) {
      navigate('/user/students')
    }
  }, [token])

  return (
    <Wrapper column>
      <SignInCard>
        <SignInForm handleSignIn={handleSignIn} />
      </SignInCard>
    </Wrapper>
  )
}
export default UserSignin
