import type { Meta, StoryObj } from "@storybook/react";

import { MovieCardDetail } from ".";

const meta = {
  title: "Molecules/MovieCardDetail",
  component: MovieCardDetail,

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    movie: {
      name: "Dungeons & Dragons - BECMI",
      year: 1983,
      image: "https://i.imgur.com/JFFDm00.jpeg",
      publisher: "T.S.R. Inc.",
      tags: ["Fantasy", "Adventure", "Roleplaying"],
    },
  },
} satisfies Meta<typeof MovieCardDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
