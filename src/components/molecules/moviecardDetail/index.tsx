import { Info, InfoSmall, Title, TitleSmall } from "@src/components/typography";
import styled from "styled-components";

export interface MovieCardProps {
  movie: {
    name: string;
    publisher: string;
    year: number;
    image: string;
    tags?: string[];
  };
}

const Wrapper = styled.div`
  display: flex;
  gap: 18px;
  color: #fff;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .title {
    display: flex;
    gap: 10px;

    ${({ theme }) => Title(theme)};
  }
  .publisher {
    display: flex;
    gap: 5px;
    flex-direction: column;

    .header {
      ${({ theme }) => Info(theme)};
      color: ${({ theme }) => theme.typography.fontColor.secondary};
    }
    .value {
      ${({ theme }) => TitleSmall(theme)};
    }
  }
  .info {
    display: flex;
    gap: 16px;
    ${({ theme }) => InfoSmall(theme)};
    color: ${({ theme }) => theme.typography.fontColor.secondary};
    .tags {
      display: flex;
      gap: 5px;
    }
  }
`;
const Poster = styled.img`
  width: 100px;
`;

const MovieCardDetail: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Wrapper>
      <Data>
        <div className="title">{movie.name}</div>
        <div className="publisher">
          <div className="header">PUBLISHER</div>
          <div className="value">{movie.publisher}</div>
        </div>
        <div className="info">
          <div className="year">{movie.year}</div>
          {movie.tags && (
            <div className="tags">
              {movie.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </Data>
      <Poster src={movie.image} alt={movie.name} />
    </Wrapper>
  );
};

export { MovieCardDetail };
