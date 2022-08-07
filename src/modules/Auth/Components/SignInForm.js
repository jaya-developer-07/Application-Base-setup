import React from 'react'
import Button from 'components/Button'
import Input from 'components/Form/Input'
import styled from 'styled-components'
import { Form } from 'antd'

const InputWrapper = styled.div`
  padding-bottom: 25px;
`

const SignInForm = ({ handleSignIn }) => {
  const onFinish = values => {
    handleSignIn(values)
  }

  return (
    <Form onFinish={onFinish} initialValues={{ remember_me: false }}>
      <InputWrapper>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          width={'390px'}
          rules={[
            { required: true, message: 'Please enter your email address' },
          ]}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          width={'390px'}
          rules={[{ required: true, message: 'Please enter a password' }]}
        />
      </InputWrapper>
      <Form.Item>
        <Button.Primary text={'Login'} width={'390px'} htmlType="submit" />
      </Form.Item>
    </Form>
  )
}

export default SignInForm
