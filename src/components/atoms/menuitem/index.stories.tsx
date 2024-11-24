import { ReactComponent as Icon } from "@src/components/icons/octicon_eye-24.svg";
import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { MenuItem } from ".";

const meta = {
  title: "Atoms/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {},
  args: {
    icon: <Icon />,
    onClick: fn(),
    children: "Home",
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
