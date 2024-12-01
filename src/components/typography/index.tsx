import { css, DefaultTheme } from "styled-components";

export const Title = (theme: DefaultTheme) => css`
  font-family: ${theme.typography.fontFamily.primary};
  font-weight: bold;
  font-size: 24px;
  line-height: 100%;
`;

export const TitleSmall = (theme: DefaultTheme) => css`
  ${Title(theme)};
  font-size: 18px;
`;

export const Text = (theme: DefaultTheme) => css`
  font-family: ${theme.typography.fontFamily.secondary};
  font-size: 14px;
  line-height: 125%;
`;

export const Info = (theme: DefaultTheme) => css`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
`;

export const InfoSmall = (theme: DefaultTheme) => css`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: 12px;
  line-height: 100%;
`;

export const InfoLarge = (theme: DefaultTheme) => css`
  font-family: ${theme.typography.fontFamily.secondary};
  font-size: 32px;
  line-height: 100%;
`;
