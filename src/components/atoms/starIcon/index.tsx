import styled from "styled-components";
import { ReactComponent as Star } from "./assets/star.svg";

const StyledStar = styled(Star)<{ active?: boolean }>`
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.colors.grey600};
  ${({ theme, active }) =>
    active &&
    `
  fill: ${theme.colors.accent};
  `}
`;

const StarIcon = ({ active }: { active?: boolean }) => {
  return <StyledStar active={active} />;
};

export { StarIcon };
