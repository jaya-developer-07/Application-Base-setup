/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { Checkbox as AntdCheckbox } from 'antd'
import { COLORS } from 'theme'

const StyledCheckbox = styled(AntdCheckbox)`
  .ant-checkbox + span {
    padding-left: 12px;
  }
`
const LabelWrapper = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #202020;
`

const Checkbox = ({ onChange, label, value, ...rest }) => {
  return (
    <StyledCheckbox {...rest} onChange={onChange} value={value}>
      <LabelWrapper>{label}</LabelWrapper>
    </StyledCheckbox>
  )
}
export default Checkbox
