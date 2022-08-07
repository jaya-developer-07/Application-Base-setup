/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import Label from 'components/Form/Label'
import styled from 'styled-components'
import { COLORS } from 'theme'
import { InputNumber as AntdInputNumber, Form } from 'antd'

const { Item } = Form

const StyledItem = styled(Item)`
  > div {
    width: 100%;
    text-align: left;
  }
  border-radius: 8px;
  margin-bottom: 0px !important;
  display: flex;
  flex-direction: column;
`

export const StyledInputNumber = styled(AntdInputNumber)`
  border-radius: 8px !important;
  padding-top: 5px !important;
  width: 100%;
  ::placeholder {
    font-size: 16px;
  }
  box-shadow: none;
  border-color: #e9e9e9;
  :focus {
    border-color: #e9e9e9;
    box-shadow: none;
  }
  :hover {
    border-color: #e9e9e9;
  }
  :not(.ant-input-affix-wrapper-disabled):hover {
    border-color: #e9e9e9 !important;
  }
  .ant-input-affix-wrapper-focused {
    box-shadow: none;
    border-right-width: 0px !important;
  }

  .ant-input-number-prefix {
    color: #dbdbdb;
  }

  .ant-input-number-input {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: ${COLORS.HEADING};
  }

  .ant-input-number-handler-wrap {
    opacity: unset;
    border-radius: 0 8px 8px 0;
    padding-top: 4px;
  }

  .ant-input-number-handler {
    width: 20px;
    height: 12px;
    color: #989898;
  }

  .ant-input-number-handler-up,
  .ant-input-number-handler-down {
    background: #ededed;
    margin-bottom: 2px;
    border-radius: 3px;
    margin-top: 2px;
  }

  .ant-input-number-handler-up:hover,
  .ant-input-number-handler-down:hover {
    height: 12px !important;
  }
`

const InputNumber = ({
  label,
  type,
  name,
  rules,
  onChange,
  placeholder,
  required,
  disabled,
  width = '552px',
  height = '40px',
  marginRight,
  labelStyle,
  defaultValue,
  ...rest
}) => {
  return (
    <StyledItem
      style={{
        width: width,
        height: height,
        marginRight: marginRight,
      }}
      rules={rules}
      name={name}
      colon={false}
      required={false}
      label={
        label && (
          <Fragment>
            <Label required={required} labelStyle={labelStyle}>
              {label}
            </Label>
          </Fragment>
        )
      }
    >
      <StyledInputNumber
        {...rest}
        defaultValue={defaultValue}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </StyledItem>
  )
}

export default InputNumber
