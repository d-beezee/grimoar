import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

const meta = {
  title: "Atoms/Input",
  component: Input,

  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
  },
};
