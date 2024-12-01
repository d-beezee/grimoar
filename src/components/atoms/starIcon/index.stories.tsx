import type { Meta, StoryObj } from "@storybook/react";

import { ICON_TYPES, StarIcon } from ".";

const meta = {
  title: "Atoms/StarIcon",
  component: StarIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    kind: {
      control: { type: "select" },
      options: ICON_TYPES,
    },
  },
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

export const Half: Story = {
  args: {
    active: true,
    percent: 50,
  },
};

export const Thumb: Story = {
  args: {
    kind: "thumb",
  },
};

export const ThumbActive: Story = {
  args: {
    kind: "thumb",
    active: true,
  },
};

export const ThumbHalf: Story = {
  args: {
    kind: "thumb",
    active: true,
    percent: 50,
  },
};
