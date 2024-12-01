import type { Meta, StoryObj } from "@storybook/react";

import { Graph } from ".";

const meta = {
  title: "Atoms/Graph",
  component: Graph,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    distribution: {
      1: 1,
      2: 2,
      3: 3,
      4: 6,
      5: 3,
    },
  },
} satisfies Meta<typeof Graph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
