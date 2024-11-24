import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AVATAR_SIZES } from ".";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    size: {
      control: { type: "select" }, // Genera un menu a tendina
      options: AVATAR_SIZES,
    },
  },
  args: {
    src: "https://place-hold.it/100x100",
    children: "james",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {},
};

export const Right: Story = {
  args: {
    align: "right",
  },
};

export const LargeLeft: Story = {
  args: {
    size: "large",
  },
};

export const LargeRight: Story = {
  args: {
    size: "large",
    align: "right",
  },
};
