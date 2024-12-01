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
    1?: number;
    2?: number;
    3?: number;
    4?: number;
    5?: number;
  };
};

const Graph = ({ distribution }: GraphProps) => {
  const max = Math.max(...Object.values(distribution));

  return (
    <Wrapper>
      <Columns>
        <Column
          style={{
            height: distribution[1] ? `${(100 * distribution[1]) / max}%` : "0",
          }}
        />
        <Column
          style={{
            height: distribution[2] ? `${(100 * distribution[2]) / max}%` : "0",
          }}
        />
        <Column
          style={{
            height: distribution[3] ? `${(100 * distribution[3]) / max}%` : "0",
          }}
        />
        <Column
          style={{
            height: distribution[4] ? `${(100 * distribution[4]) / max}%` : "0",
          }}
        />
        <Column
          style={{
            height: distribution[5] ? `${(100 * distribution[5]) / max}%` : "0",
          }}
        />
      </Columns>
      <Base />
    </Wrapper>
  );
};

export { Graph };
