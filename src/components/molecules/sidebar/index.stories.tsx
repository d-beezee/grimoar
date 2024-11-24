import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { Sidebar } from ".";

const meta = {
  title: "Molecules/Sidebar",
  component: Sidebar,

  args: {
    setIsOpen: fn(),
    user: { name: "james", avatar: "https://place-hold.it/100x100" },
    items: [
      {
        key: "1",
        icon: "🏠",
        name: "Home",
        onClick: () => {},
      },
      {
        key: "2",
        icon: "📦",
        name: "Products",
        onClick: () => {},
      },
      {
        key: "3",
        icon: "🛒",
        name: "Cart",
        onClick: () => {},
      },
    ],
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isOpen: true,
  },
};
