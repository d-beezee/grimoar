import { ReactComponent as Logo } from "@src/components/icons/material-symbols_login.svg";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, BUTTON_KINDS, BUTTON_SIZES } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    kind: {
      control: { type: "select" }, // Genera un menu a tendina
      options: BUTTON_KINDS,
    },
    size: {
      control: { type: "select" }, // Genera un menu a tendina
      options: BUTTON_SIZES,
    },
  },
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn(), children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    kind: "primary",
  },
};

export const Secondary: Story = {
  args: {
    kind: "secondary",
  },
};
export const Danger: Story = {
  args: {
    kind: "danger",
  },
};

export const Info: Story = {
  args: {
    kind: "info",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Logo style={{ width: "100%" }} />,
  },
};

export const SmallWithIcon: Story = {
  args: {
    size: "small",
    icon: <Logo style={{ width: "100%" }} />,
  },
};
