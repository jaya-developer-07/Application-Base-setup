import styled from 'styled-components'
import Flex from 'components/Flex'

const BREAKPOINT = '999px'

const SidebarPage = styled(Flex)`
  padding: 30px;
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

export default SidebarPage
