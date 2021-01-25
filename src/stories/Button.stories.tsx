import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "../Components/Button";

export default {
  title: "Controls/Button",
  component: Button,
  argTypes: {
    text: {
      type: { text: "string", required: true },
      description: "Button text",
      defaultValue: "Button",
    },
    ariaLabel: {
      type: { ariaLabel: "string", required: true },
      description: "Description for screen readers",
      defaultValue: "Click button",
    },
    big: {
      type: { big: "boolean", required: false },
      description: "Size",
      defaultValue: false,
    },
    rounded: {
      type: { rounded: "boolean", required: false },
      description: "Corners",
      defaultValue: false,
    },
    transparent: {
      type: { transparent: "boolean", required: false },
      description: "Transparent style",
      defaultValue: false,
    },
    disabled: {
      type: { disabled: "boolean", required: false },
      description: "Disable button",
      defaultValue: false,
    },
    colorMain: {
      type: { colorMain: "string", required: false },
      description: "Normal state color",
      defaultValue: "#3366ff",
      control: "color",
    },
    colorText: {
      type: { colorText: "string", required: false },
      description: "Text color",
      defaultValue: "#FFFFFF",
      control: "color",
    },
    colorHover: {
      type: { colorHover: "string", required: false },
      description: "Hover state color",
      defaultValue: "#6690FF",
      control: "color",
    },
    colorFocus: {
      type: { colorFocus: "string", required: false },
      description: "Focus state color",
      defaultValue: "#254EDA",
      control: "color",
    },
    colorOutline: {
      type: { colorOutline: "string", required: false },
      description: "Outline color on focus",
      defaultValue: "#6690FF",
      control: "color",
    },
    colorDisabled: {
      type: { colorDisabled: "string", required: false },
      description: "Disabled state color",
      defaultValue: "#E3E4EB",
      control: "color",
    },
    className: {
      type: { className: "string", required: false },
      description: "Css class name",
      control: null,
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Button",
  ariaLabel: "Click button",
  big: false,
  rounded: false,
  transparent: false,
  disabled: false,
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
