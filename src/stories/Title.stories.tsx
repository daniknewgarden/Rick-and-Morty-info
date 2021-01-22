import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

//Component export
import Title, { TitleProps } from "../Components/Title";

export default {
  title: "Text/Title",
  component: Title,
  argTypes: {
    text: {
      type: { text: "string", required: true },
      description: "Title text",
      defaultValue: "Title",
    },
    big: {
      type: { big: "boolean", required: false },
      description: "Big variant",
      defaultValue: false,
    },
    color: {
      type: { className: "string", required: false },
      description: "Text color",
      defaultValue: "#000000",
      control: "color",
    },
    className: {
      type: { className: "string", required: false },
      description: "Css class name",
      control: null,
    },
  },
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Normal title",
  big: false,
};

export const Big = Template.bind({});
Big.args = {
  text: "Big title",
  big: true,
};
