/* eslint-disable */
import React from 'react'
import SidebarPage from 'components/SidebarPage'
import Flex from 'components/Flex'
import styled from 'styled-components'
import Nav from 'modules/Nav/Container/index'
import Header from 'modules/Page/Components/Partials/Header'

const BREAKPOINT = '999px'

const ContentWrapper = styled(Flex)`
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`
const PageWrapper = styled(Flex)`
  background: '#FFFFFF';
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  flex-grow: 1;
  @media screen and (max-width: ${BREAKPOINT}) {
    padding: 0px;
    overflow-x: hidden;
    box-sizing: border-box;
  }
`

const Page = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <Flex>
        <Nav />
        <SidebarPage>
          <ContentWrapper>{children}</ContentWrapper>
        </SidebarPage>
      </Flex>
    </PageWrapper>
  )
}
export default Page
