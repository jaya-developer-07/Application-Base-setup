import React from "react"
import Flex from "components/Flex"

import Button from "components/Button/index"

import Checkbox from "components/Form/Checkbox"
import InputNumber from 'components/Form/InputNumber'
import Input from 'components/Form/Input'
import RadioButton from 'components/Form/RadioButton'
import Slider from 'components/Form/Slider'
import Switch from 'components/Form/Switch'
import TextArea from 'components/Form/TextArea'

import Drawer from 'components/Drawer/index'

const Students = () => {
  //Available common components. added for reference , pls remove while developing this module.
  return <Flex column>
    Students Module
    {/* <Flex>
      <Button.Primary text={"primary button"} />
      <Button.Secondary text={"Secondary button"} />
      <Button.Danger text={"Danger"} />
      <Button.Default text={"default"} />
      <Button.Round icon={"R"} />
      <Button.Circle icon={"C"} />
    </Flex>
    <Flex column>
      <Checkbox />
      <InputNumber />
      <Input />
      <RadioButton />
      <Slider />
      <Switch />
      <TextArea />
    </Flex>

    <Drawer
      title={"Drawer Title"}
      placement={"right"}
      visible={false}
      content={"DRawer Content"}
      footer={"footer"}
      onClose={true}
    /> */}

  </Flex>
}
export default Students
