import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Columns = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
  height: 70px;
`;
const Column = styled.div`
  background-color: ${({ theme }) => theme.colors.grey600};
  flex-grow: 1;
`;
const Base = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey600};
`;

export type GraphProps = {
  distribution: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
};

const Graph = ({ distribution }: GraphProps) => {
  const max = Math.max(...Object.values(distribution));

  return (
    <Wrapper>
      <Columns>
        <Column style={{ height: `${(100 * distribution[1]) / max}%` }} />
        <Column style={{ height: `${(100 * distribution[2]) / max}%` }} />
        <Column style={{ height: `${(100 * distribution[3]) / max}%` }} />
        <Column style={{ height: `${(100 * distribution[4]) / max}%` }} />
        <Column style={{ height: `${(100 * distribution[5]) / max}%` }} />
      </Columns>
      <Base />
    </Wrapper>
  );
};

export { Graph };
