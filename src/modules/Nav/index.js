/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Menu } from 'antd'
import styled from 'styled-components'
import { navItems } from 'modules/Nav/navItems'
import SideBar from 'components/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom'
import Flex from 'components/Flex'

const MenuStyle = styled(Menu)``
const MenuItem = styled(Menu.Item)``

const MeneTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: ${props => props.color};
  padding-left: 13px;
  line-height: 18px;
`

const Nav = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuType] = useState('GlobalMenu')

  const getMenu = navItem =>
    navItem.map(item => {
      return (
        <MenuItem key={item.path} path={item.path}>
          <Flex centerVertically>
            <item.icon
              color={location.pathname === item.path ? 'white' : '#999FAC'}
            />
            <MeneTitle
              color={location.pathname === item.path ? 'white' : '#999FAC'}
            >
              {item?.navTitle}
            </MeneTitle>
          </Flex>
        </MenuItem>
      )
    })

  const onItemClick = ({ item: { props } }) => {
    const { path } = props
    navigate(path)
  }

  return (
    <SideBar>
      <MenuStyle
        selectedKeys={[location.pathname]}
        theme="dark"
        mode="inline"
        style={{ minHeight: '100vh' }}
        inlineIndent={24}
        onClick={onItemClick}
        inlineCollapsed={false}
      >
        {getMenu(navItems.filter(e => e.menuType === menuType))}
      </MenuStyle>
    </SideBar>
  )
}
export default Nav
