import styled, { css } from 'styled-components'

const defaultStyles = ({
  center,
  right,
  centerVertically,
  flexEnd,
  spaceBetween,
  spaceAround,
  spaceEvenly,
  column,
  cursor,
  wrap,
  alignCenter,
  end,
  flexStart,
  baseLine,
  flexFlow,
  alignEnd,
}) =>
  css`
    display: flex;
    ${center && 'justify-content: center;'}
    ${right && 'justify-content: flex-end;'}
    ${spaceBetween && 'justify-content: space-between;'}
    ${spaceAround && 'justify-content: space-around;'}
    ${spaceEvenly && 'justify-content: space-evenly;'}
    ${flexEnd && 'justify-content: flex-end;'}
    ${centerVertically && 'align-items: center;'}
    ${column && 'flex-direction: column;'}
    ${cursor && 'cursor: pointer;'}
    ${wrap && 'flex-wrap: wrap;'}
    ${alignCenter && 'align-items: center'}
    ${end && 'justify-content: end;'}
    ${flexStart && 'align-items: flex-start;'}
    ${baseLine && 'align-items: baseline;'}
    ${flexFlow && 'flex-flow: wrap;'}
    ${alignEnd && 'align-items: end;'}
  `
const Flex = styled.div`
  ${defaultStyles}
  ${props => props.styles}
`

export default Flex
