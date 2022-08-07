import styled from 'styled-components'
import Flex from 'components/Flex'

const Sidebar = styled(Flex)`
  min-width: 200px;
  max-width: 200px;
  min-height: 100vh;
  max-height: 100vh;
  flex-direction: column;
  transition: 0.4s ease;
  background: #ffffff;
  ::before {
    content: '';
    position: fixed;
    background: rgba(0, 0, 0, 0.45);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0;
    display: 'none';
    transition: 0.4s ease;
  }
`

export default Sidebar
