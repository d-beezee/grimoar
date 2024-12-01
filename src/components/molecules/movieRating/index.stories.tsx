import type { Meta, StoryObj } from "@storybook/react";

import { MovieRating } from ".";

const meta = {
  title: "Molecules/MovieRating",
  component: MovieRating,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "380px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    average: 3.5,
    distribution: {
      1: 1,
      2: 2,
      3: 3,
      4: 6,
      5: 3,
    },
  },
} satisfies Meta<typeof MovieRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
