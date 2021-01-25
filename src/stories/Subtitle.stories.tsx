import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

//Component export
import Subtitle, { SubtitleProps } from "../Components/Subtitle";

export default {
  title: "Text/Subtitle",
  component: Subtitle,
  argTypes: {
    text: {
      type: { text: "string", required: true },
      description: "Subtitle text",
      defaultValue: "Subtitle",
    },
    big: {
      type: { big: "boolean", required: false },
      description: "Big variant",
      defaultValue: false,
    },
    color: {
      type: { className: "string", required: false },
      description: "Text color",
      defaultValue: "#555770",
      control: "color",
    },
    className: {
      type: { className: "string", required: false },
      description: "Css class name",
      control: null,
    },
  },
} as Meta;

const Template: Story<SubtitleProps> = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Normal Subtitle",
  big: false,
};

export const Big = Template.bind({});
Big.args = {
  text: "Big Subtitle",
  big: true,
};
