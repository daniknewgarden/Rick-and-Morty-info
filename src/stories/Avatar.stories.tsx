import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

//Component export
import Avatar, { AvatarProps } from "../Components/Avatar";
//Media
import avatar from "./assets/Avatar.webp";

export default {
  title: "Blocks/Avatar",
  component: Avatar,
  argTypes: {
    name: {
      type: { name: "string", required: true },
      description: "Person name",
      defaultValue: "Avatar",
    },
    subtitle: {
      type: { subtitle: "string", required: true },
      description: "Some additional info",
      defaultValue: "Subtitle",
    },
    image: {
      type: { image: "string", required: false },
      description: "Path to your image",
      control: null,
    },
    avatarSize: {
      type: { avatarSize: "string", required: false },
      description: "Avatar size",
      defaultValue: "80px",
    },
    nameColor: {
      type: { nameColor: "string", required: false },
      description: "Name text color",
      defaultValue: "#000000",
      control: "color",
    },
    subtitleColor: {
      type: { subtitleColor: "string", required: false },
      description: "Subtitle text color",
      defaultValue: "#8e90a6",
      control: "color",
    },
    borderColor: {
      type: { borderColor: "string", required: false },
      description: "Avatar border color",
      defaultValue: "#ebebf0",
      control: "color",
    },
    className: {
      type: { className: "string", required: false },
      description: "Css class name",
      control: null,
    },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Avatar",
  subtitle: "Only text",
};

export const WithImage = Template.bind({});
WithImage.args = {
  name: "Avatar",
  subtitle: "With image",
  image: avatar,
  avatarSize: "80px",
};
