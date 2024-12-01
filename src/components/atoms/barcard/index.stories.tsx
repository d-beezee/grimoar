import type { Meta, StoryObj } from "@storybook/react";

import { BarCard } from ".";

const meta = {
  title: "Atoms/BarCard",
  component: BarCard,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "BarCard",
  },
} satisfies Meta<typeof BarCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
