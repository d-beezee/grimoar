import styled from "styled-components";
import { ReactComponent as Star } from "./assets/star.svg";

const StyledStar = styled(Star)<{ active?: boolean }>`
  width: 16px;
  height: 16px;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.grey600};
  ${({ theme, active }) =>
    active &&
    `
  fill: ${theme.colors.accent};
  `}
`;

const StarIcon = ({
  active,
  onClick,
}: {
  active?: boolean;
  onClick?: () => Promise<void>;
}) => {
  return <StyledStar active={active} onClick={onClick} />;
};

export { StarIcon };
