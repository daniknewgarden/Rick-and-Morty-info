import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

//Component export
import Dropdown, { DropdownProps } from "../Components/Dropdown";

export default {
  title: "Dropdown/Dropdown",
  component: Dropdown,
  argTypes: {},
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {};
