import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

//Component export
import Checkbox, { CheckBoxProps } from "../Components/Checkbox";

export default {
  title: "Controls/Checkbox",
  component: Checkbox,
  argTypes: {
    text: {
      type: { text: "string", required: false },
      description: "Label text",
      defaultValue: "Default checkbox",
    },
    name: {
      type: { name: "string", required: false },
      description: "HTML input name attribute",
    },
    disabled: {
      type: { disabled: "boolean", required: false },
      description: "Disable checkbox",
      defaultValue: false,
    },
    colorDefault: {
      type: { colorDefault: "string", required: false },
      description: "Normal state color",
      defaultValue: "#555770",
      control: "color",
    },
    colorHover: {
      type: { colorHover: "string", required: false },
      description: "Hover state color",
      defaultValue: "#6690ff",
      control: "color",
    },
    colorChecked: {
      type: { colorChecked: "string", required: false },
      description: "Checked state color",
      defaultValue: "#254eda",
      control: "color",
    },
    colorDisabled: {
      type: { colorDisabled: "string", required: false },
      description: "Disabled state color",
      defaultValue: "#e3e4eb",
      control: "color",
    },
    className: {
      type: { className: "string", required: false },
      description: "Css class name",
      control: null,
    },
  },
} as Meta;

const Template: Story<CheckBoxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default checkbox",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled checkbox",
  disabled: true,
};
