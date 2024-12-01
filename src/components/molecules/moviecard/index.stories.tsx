import type { Meta, StoryObj } from "@storybook/react";

import { MovieCard } from ".";

const meta = {
  title: "Molecules/MovieCard",
  component: MovieCard,

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    movie: {
      name: "Dungeons & Dragons - BECMI",
      description:
        "A game of heroic adventure, set in a fantasy world of diverse cultures, creatures, and magical powers.",
      year: 1983,
      image: "https://i.imgur.com/JFFDm00.jpeg",
    },
  },
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const WithVote: Story = {
  args: {
    movie: {
      name: "Dungeons & Dragons - BECMI",
      description:
        "A game of heroic adventure, set in a fantasy world of diverse cultures, creatures, and magical powers.",
      year: 1983,
      image: "https://i.imgur.com/JFFDm00.jpeg",
      vote: 3.5,
    },
  },
};
