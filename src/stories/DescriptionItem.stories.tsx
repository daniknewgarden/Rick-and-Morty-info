import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

//Component export
import DescriptionItem, {
  DescriptionItemProps,
} from "../Components/DescriptionItem";

export default {
  title: "Text/Description item",
  component: DescriptionItem,
  argTypes: {
    item: {
      type: { item: "string", required: true },
      description: "Item text",
      defaultValue: "Item",
    },
    description: {
      type: { description: "string", required: true },
      description: "Description text",
      defaultValue: "Description",
    },
    colorItem: {
      type: { colorItem: "string", required: false },
      description: "Item text color",
      defaultValue: "#000000",
      control: "color",
    },
    colorDescription: {
      type: { colorDescription: "string", required: false },
      description: "Description text color",
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

const Template: Story<DescriptionItemProps> = (args) => (
  <DescriptionItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  item: "Item text",
  description: "Description text",
};
