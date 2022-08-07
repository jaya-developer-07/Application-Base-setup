/* eslint-disable */
import React from 'react'
import { Radio as AntdRadio } from 'antd'
import { COLORS } from 'theme'
import styled from 'styled-components'

const StyledRadio = styled(AntdRadio)`
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.HEADING};
  .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: none !important;
  }
`

const Radio = ({ onChange, label, ...rest }) => {
  return (
    <StyledRadio {...rest} onChange={onChange}>
      {label}
    </StyledRadio>
  )
}
export default Radio
