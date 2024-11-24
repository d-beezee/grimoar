import { Title } from "@src/components/typography";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  ${({ theme }) => Title(theme)};
  color: #fff;
  align-items: center;
  cursor: pointer;

  svg {
    width: 24px;
  }
`;

const MenuItem = ({
  icon,
  children,
  onClick,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Wrapper onClick={onClick}>
      {icon}
      <span>{children}</span>
    </Wrapper>
  );
};

export { MenuItem };
