import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { Signin } from ".";

const meta = {
  title: "Molecules/Signin",
  component: Signin,

  parameters: {
    layout: "centered",
  },
  args: {
    onSignin: fn(),
    onForgotPassword: fn(),
  },
} satisfies Meta<typeof Signin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
