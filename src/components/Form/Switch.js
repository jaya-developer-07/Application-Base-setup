import React from 'react'
import { Switch as AntdSwitch, Form } from 'antd'
import styled from 'styled-components'
import Flex from 'components/Flex'

const FlexWrapper = styled(Flex)``

const StyledSwitch = styled(AntdSwitch)`
  box-shadow: none !important;
`
const LabelWrapper = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #202020;
`

const Switch = ({ label, name, onChange, valuePropName, ...rest }) => {
  return (
    <Form.Item name={name} valuePropName={valuePropName} {...rest}>
      <FlexWrapper spaceBetween>
        <LabelWrapper>{label}</LabelWrapper>
        <StyledSwitch onChange={onChange} {...rest} />
      </FlexWrapper>
    </Form.Item>
  )
}

export default Switch
