import type { Meta, StoryObj } from "@storybook/react";

import { Stars } from ".";

const meta = {
  title: "Molecules/Stars",
  component: Stars,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    rating: 0,
  },
} satisfies Meta<typeof Stars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const One: Story = {
  args: {
    rating: 1,
  },
};
export const Two: Story = {
  args: {
    rating: 2,
  },
};
export const Three: Story = {
  args: {
    rating: 3,
  },
};
export const Four: Story = {
  args: {
    rating: 4,
  },
};
export const Five: Story = {
  args: {
    rating: 5,
  },
};
