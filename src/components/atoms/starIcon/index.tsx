import styled from "styled-components";
import { ReactComponent as Star } from "./assets/star.svg";

const Wrapper = styled.div<{ active?: boolean; percent?: number }>`
  position: relative;
  width: 16px;
  height: 16px;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.grey600};
  }

  svg.fill {
    fill: ${({ theme }) => theme.colors.accent};
    clip-path: ${({ percent }) =>
      percent && `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`};
  }
`;

const StarIcon = ({
  active,
  percent,
  onClick,
}: {
  active?: boolean;
  percent?: number;
  onClick?: () => Promise<void>;
}) => {
  return (
    <Wrapper active={active} percent={percent} onClick={onClick}>
      <Star />
      {active && <Star className="fill" />}
    </Wrapper>
  );
};

export { StarIcon };
