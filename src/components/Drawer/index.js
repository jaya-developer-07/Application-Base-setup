import React from 'react'
import { Drawer as AntdDrawer } from 'antd'
import styled from 'styled-components'
import Footer from './partials/Footer'

const StyledDrawer = styled(AntdDrawer)`
  .ant-drawer-body {
   padding:30px;
  }
  .ant-drawer-wrapper-body {
    height: 92%;
    overflow: auto;
  }
`

const Drawer = ({
  width = '40%',
  title,
  placement,
  closable = false,
  onClose,
  visible,
  content,
  footer,
  footerStyles,
  ...rest
}) => {
  return (
    <StyledDrawer
      {...rest}
      width={width}
      title={title}
      placement={placement}
      closable={closable}
      onClose={onClose}
      visible={visible}
      key={placement}
    >
      {content}
      {footer && <Footer footerStyles={footerStyles}>{footer}</Footer>}
    </StyledDrawer>
  )
}
export default Drawer
