import React from 'react'
import styled from 'styled-components'

import Flex from 'components/Flex'
import Spinner from './Spinner'

const Wrapper = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: 250ms opacity;
  pointer-events: none;
  z-index: 100;
`

const SpinnerOverlay = ({ spinnerProps, ...props }) => {
  return (
    <Wrapper center centerVertically {...props}>
      <Spinner size={32} />
    </Wrapper>
  )
}

export default SpinnerOverlay
