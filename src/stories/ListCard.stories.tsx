import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

//Component export
import ListCard, { ListCardProps } from "../Components/ListCard";

//Components
const arr = [
  { name: "First name" },
  { name: "Second name" },
  { name: "Third name" },
  { name: "Fourth name" },
  { name: "Fifth name" },
  { name: "Sixth name" },
  { name: "Seventh name" },
];

const Items: Array<React.ReactElement> = arr.map((item: any, index: number) => (
  <li key={index}>{item.name}</li>
));

export default {
  title: "Blocks/ListCard",
  component: ListCard,
  argTypes: {
    title: {
      type: { title: "string", required: true },
      description: "Block title",
      defaultValue: "Title",
    },
    listItems: {
      type: { listItems: "Array<React.ReactElement>", required: true },
      description: "HTML li elements",
      control: null,
    },
    radiusSize: {
      type: { radiusSize: "string", required: false },
      description: "Border radius",
      defaultValue: "16px",
    },
    colorText: {
      type: { colorText: "string", required: false },
      description: "Title text color",
      defaultValue: "#000000",
      control: "color",
    },
    colorItem: {
      type: { colorItem: "string", required: false },
      description: "List item text color",
      defaultValue: "#555770",
      control: "color",
    },
    colorBorder: {
      type: { colorBorder: "string", required: false },
      description: "Border color",
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

const Template: Story<ListCardProps> = (args) => <ListCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  listItems: Items,
};
