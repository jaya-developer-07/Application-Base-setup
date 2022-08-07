/* eslint-disable no-unused-vars */
import request from 'utils/request'
import initializeApp from 'utils/initializeApp'

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'

export const SignInSuccess = token => {
  return {
    type: SIGN_IN_SUCCESS,
    token,
  }
}

export const SignIn = data => async dispatch => {
  try {
    // const authData = await request.post(`/auth/login`, {
    //   ...data,
    // })
    // Mock API, add the origin API and payload data
    initializeApp('authData?.data?.data?.token') // pass the token to this function
    dispatch(SignInSuccess('authData?.data?.data?.token'))
  } catch (error) {
    console.error('Getting error while login', error)
  }
}
