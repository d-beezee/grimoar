import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { GoogleButton } from ".";

const meta = {
  title: "Atoms/GoogleButton",
  component: GoogleButton,

  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof GoogleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
