import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "../Components/Button";

export default {
  title: "Controls/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Button",
  big: false,
  rounded: false,
  transparent: false,
};

export const Transparent = Template.bind({});
Transparent.args = {
  transparent: true,
  text: "Button",
};

export const Big = Template.bind({});
Big.args = {
  big: true,
  text: "Button",
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
  text: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: "Button",
};
