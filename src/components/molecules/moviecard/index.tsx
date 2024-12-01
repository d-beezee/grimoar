import { Info, Text, TitleSmall } from "@src/components/typography";
import styled from "styled-components";
import { Stars } from "../stars";

export interface MovieCardProps {
  movie: {
    name: string;
    description: string;
    year: number;
    image: string;
    vote?: number;
  };
}

const Title = styled.h2`
  margin: 0;
  .main {
    ${({ theme }) => TitleSmall(theme)}
    color: #fff;
  }
  .sub {
    ${({ theme }) => Info(theme)}
    color: ${({ theme }) => theme.typography.fontColor.secondary};
  }
`;

const Wrapper = styled.div<{ hasVote?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ hasVote }) => !hasVote && `gap: 10px;`}
`;

const DescriptionWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  img {
    max-width: 80px;
  }
  .description {
    ${({ theme }) => Text(theme)};
    color: #fff;
  }
`;

const StarsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Wrapper>
      <Title>
        <div className="main">{movie.name}</div>
        <div className="sub">{movie.year}</div>
      </Title>
      <StarsWrapper>
        <Stars rating={movie.vote || 0} />
      </StarsWrapper>
      <DescriptionWrapper>
        <div>
          <img src={movie.image} />
        </div>
        <div className="description">{movie.description}</div>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export { MovieCard };
