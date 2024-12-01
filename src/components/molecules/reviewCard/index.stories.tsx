import type { Meta, StoryObj } from "@storybook/react";

import { ReviewCard } from ".";

const meta = {
  title: "Molecules/ReviewCard",
  component: ReviewCard,
  parameters: {
    layout: "centered",
  },
  args: {
    user: {
      avatar: "https://place-hold.it/100x100",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithVote: Story = {
  args: {
    vote: 3,
  },
};
