import { Graph, GraphProps } from "@src/components/atoms/graph";
import { StarIcon } from "@src/components/atoms/starIcon";
import { InfoLarge, TitleSmall } from "@src/components/typography";
import styled from "styled-components";
import { Stars } from "../stars";

type MovieRatingProps = GraphProps & {
  average: number;
};

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

const Title = styled.div`
  ${({ theme }) => TitleSmall(theme)};
  color: ${({ theme }) => theme.typography.fontColor.secondary};
`;

const GraphWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-end;

  .graph {
    flex-grow: 1;
  }
`;

const AverageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .average {
    text-align: center;
    ${({ theme }) => InfoLarge(theme)};
    color: ${({ theme }) => theme.typography.fontColor.secondary};
  }
`;

const MovieRating = ({ average, distribution }: MovieRatingProps) => {
  return (
    <Wrapper>
      <Title>RATINGS</Title>
      <GraphWrapper>
        <StarIcon active />
        <div className="graph">
          <Graph distribution={distribution} />
        </div>
        <AverageWrapper>
          <div className="average">{average.toFixed(1)}</div>
          <Stars rating={5} />
        </AverageWrapper>
      </GraphWrapper>
    </Wrapper>
  );
};

export { MovieRating };
