import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

//Component export
import DropdownItem, { DropdownItemProps } from "../Components/DropdownItem";

export default {
  title: "Dropdown/DropdownItem",
  component: DropdownItem,
  argTypes: {
    title: {
      type: { title: "string", required: true },
      description: "Title text",
      defaultValue: "Dropdown item",
    },
    subtitle: {
      type: { subtitle: "string", required: true },
      description: "Subtitle text",
      defaultValue: "Subtitle",
    },
    colorTitle: {
      type: { colorTitle: "string", required: false },
      description: "Title text color",
      defaultValue: "#000000",
      control: "color",
    },
    colorSubtitle: {
      type: { colorSubtitle: "string", required: false },
      description: "Subtitle text color",
      defaultValue: "#8e90a6",
      control: "color",
    },
    className: {
      type: { className: "string", required: false },
      description: "Css class name",
      control: null,
    },
  },
} as Meta;

const Template: Story<DropdownItemProps> = (args) => <DropdownItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Dropdown item",
  subtitle: "Subtitle",
};
