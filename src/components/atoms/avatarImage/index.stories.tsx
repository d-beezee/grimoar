import type { Meta, StoryObj } from "@storybook/react";

import { AVATAR_SIZES, AvatarImage } from ".";

const meta = {
  title: "Atoms/AvatarImage",
  component: AvatarImage,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    size: {
      control: { type: "select" }, // Genera un menu a tendina
      options: AVATAR_SIZES,
    },
  },
  args: {
    src: "https://place-hold.it/100x100",
  },
} satisfies Meta<typeof AvatarImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
