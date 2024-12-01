import type { Meta, StoryObj } from "@storybook/react";

import { StarIcon } from ".";

const meta = {
  title: "Atoms/StarIcon",
  component: StarIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof StarIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    active: true,
  },
};
