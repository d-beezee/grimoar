import { css } from "styled-components";

export const Title = css`
  ${({ theme }) => `font-family: ${theme.typography.fontFamily.primary};`}
  font-weight: bold;
  font-size: 24px;
  line-height: 100%;
`;

export const TitleSmall = css`
  ${Title}
  font-size: 18px;
`;

export const Text = css`
  ${({ theme }) => `font-family: ${theme.typography.fontFamily.secondary};`}
  font-size: 14px;
  line-height: 125%;
`;

export const Info = css`
  ${({ theme }) => `font-family: ${theme.typography.fontFamily.primary};`}
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
`;
