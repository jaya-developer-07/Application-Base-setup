/* eslint-disable react/prop-types */
import React from 'react'
import { Avatar } from 'antd'
import styled from 'styled-components'
import { COLORS } from 'theme'

const StyledAvatar = styled(Avatar)`
  margin-left: ${props => (props.margin ? '6px' : '')};
  font-weight: 600 !important;
  font-size: ${props => (props?.font ? props?.font : '12px')} !important;
  line-height: ${props =>
    props?.lineHeight ? props?.lineHeight : '16px'} !important;
  text-align: center !important;
  color: ${COLORS.HEADING} !important;
  background: ${props => (props?.background ? props?.background : '')};
`

const AntdAvatar = ({
  background,
  size,
  IconName,
  src,
  font,
  lineHeight,
  ...rest
}) => {
  return (
    <>
      <StyledAvatar
        background={background}
        size={size}
        font={font}
        src={src}
        lineHeight={lineHeight}
        {...rest}
      >
        {IconName}
      </StyledAvatar>
    </>
  )
}

export default AntdAvatar
