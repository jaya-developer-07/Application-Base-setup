/* eslint-disable */
import React from 'react'
import { Button as AntdButton } from 'antd'
import styled, { css } from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'

const BorderStyle = css`
  &:hover {
    border-color: ${COLORS.GREY_T_85};
  }
  &:focus {
    border-color: ${COLORS.GREY_T_85};
  }
`
const TextContainer = styled.div`
  margin-left: ${props => (props.icon ? '7px' : '')};
`
const dangerButtonStyles = css`
  background-color: ${COLORS.RED_S_100};
  border-color: ${COLORS.RED_S_100};
`
const secondaryButtonStyles = css`
  background-color: ${COLORS.PRIMARY_PURPLE};
  border-color: ${COLORS.PURPLE_T_80};
  color: '#FFFFFF';
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  &:hover {
    background-color: ${COLORS.PRIMARY_PURPLE};
    border-color: ${COLORS.PURPLE_T_80};
  }
  &:focus {
    background-color: ${COLORS.PRIMARY_PURPLE};
    border-color: ${COLORS.PURPLE_T_80};
  }
`
const defaultButtonStyles = css`
  color: #30475e;
`

const PlainButton = styled(AntdButton)`
  width: ${props => (props.width ? props.width : '')};
  height: ${props => (props.height ? props.height : '40px')};
  color: ${props => (props.type === 'secondary' ? COLORS.PRIMARY : '#FFFFFF')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  justify-content: center;
  cursor: ${props => props?.disableCursor && 'not-allowed'};
  pointer-events: ${props => (props?.disable ? 'none' : 'auto')};
  ${props => props.type === 'secondary' && secondaryButtonStyles}
  ${props => props.type === 'danger' && dangerButtonStyles};
  ${props => props.type === 'default' && defaultButtonStyles};
  ${BorderStyle}
`
const CircleButton = styled(AntdButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${BorderStyle}
`

const Button = props => <AntdButton {...props} />

const Primary = ({ text, icon, ...props }) => (
  <PlainButton {...props} type="primary">
    <Flex>
      {icon}
      <TextContainer icon={icon ? true : false}>{text}</TextContainer>
    </Flex>
  </PlainButton>
)

const Secondary = ({ text, icon, ...props }) => (
  <PlainButton {...props} type="secondary">
    <Flex>
      {icon}
      <TextContainer icon={icon ? true : false}>{text}</TextContainer>
    </Flex>
  </PlainButton>
)

const Danger = ({ text, icon, ...props }) => (
  <PlainButton {...props} type="danger">
    <Flex>
      {icon}
      <TextContainer icon>{text}</TextContainer>
    </Flex>
  </PlainButton>
)

const Default = ({ icon, text, onClick, ...rest }) => {
  return (
    <PlainButton onClick={onClick} {...rest} type="default">
      {icon}
      <TextContainer icon={icon}>{text}</TextContainer>
    </PlainButton>
  )
}

const Round = ({ icon, text, onClick, ...rest }) => {
  return (
    <PlainButton type="round" onClick={onClick} {...rest}>
      {icon}
      <TextContainer>{text}</TextContainer>
    </PlainButton>
  )
}

const Circle = ({ icon, onClick, ...rest }) => {
  return (
    <CircleButton type="circle" onClick={onClick} {...rest}>
      {icon}
    </CircleButton>
  )
}

Button.Primary = Primary
Button.Secondary = Secondary
Button.Danger = Danger
Button.Default = Default
Button.Round = Round
Button.Circle = Circle

export default Button
