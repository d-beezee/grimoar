import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { Signup } from ".";

const meta = {
  title: "Molecules/Signup",
  component: Signup,

  parameters: {
    layout: "centered",
  },
  args: {
    onSignup: fn(),
  },
} satisfies Meta<typeof Signup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
