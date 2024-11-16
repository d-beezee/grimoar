import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/components/theme";

export const parameters: Preview["parameters"] = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

export const tags: Preview["tags"] = ["autodocs"];

export const decorators: Preview["decorators"] = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
