import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { Sidebar } from ".";

const meta = {
  title: "Molecules/Sidebar",
  component: Sidebar,

  args: {
    setIsOpen: fn(),
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isOpen: true,
  },
};
