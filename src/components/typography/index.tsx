import { css } from "styled-components";

export const Title = css`
  ${({ theme }) => `font-family: ${theme.typography.fontFamily.primary};`}
  font-weight: bold;
  font-size: 24px;
  line-height: 100%;
`;
