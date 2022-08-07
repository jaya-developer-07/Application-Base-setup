/* eslint-disable */
import React from 'react'
import { Slider as AntdSlider } from 'antd'
import styled from 'styled-components'
import Flex from 'components/Flex'

const SliderStyle = styled(AntdSlider)`
  .ant-slider-rail {
    height: 2px;
  }
  .ant-slider-track {
    height: 2px;
  }
`

const Slider = ({
  value,
  onChange,
  marks,
  defaultValue,
  min,
  max,
  step,
  label,
}) => {
  return (
    <Flex column>
      <SliderStyle
        value={value}
        onChange={onChange}
        marks={marks}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
      />
      <Flex spaceBetween>
        <div>{min} </div>
        <div>{max + ' ' + label}</div>
      </Flex>
    </Flex>
  )
}
export default Slider
