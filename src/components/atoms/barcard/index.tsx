import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 10px;
  color: #fff;
`;
const BarCard = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export { BarCard };
