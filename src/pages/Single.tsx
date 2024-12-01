import { IonPage } from "@ionic/react";
import { MovieCardDetail } from "@src/components/molecules/moviecardDetail";
import { ReviewCard } from "@src/components/molecules/reviewCard";
import { FullPage } from "@src/components/templates/FullPage";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import {
  useGetGamesByIdQuery,
  useGetGamesByIdVotesQuery,
  usePostGamesByIdVotesMutation,
} from "../features/api";

const ImageWrapper = styled.div`
  max-height: 240px;
  display: flex;
  justify-content: center;
  background: #000;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20px; /* Altezza dell'ombra */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    pointer-events: none; /* L'ombra non interferisce con i clic */
  }
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Review = ({ id }: { id: string }) => {
  const { data } = useGetGamesByIdVotesQuery({ id });
  const [vote] = usePostGamesByIdVotesMutation();
  return (
    <div>
      <ReviewCard
        vote={data?.vote}
        user={{
          avatar: "https://place-hold.it/100x100",
        }}
        onVote={async (rating) => {
          const res = await vote({
            id,
            body: {
              vote: rating,
            },
          }).unwrap();
        }}
      />
    </div>
  );
};

const Single: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetGamesByIdQuery({
    id,
  });

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <IonPage>
      <FullPage>
        <Content>
          <ImageWrapper>
            <img src={data?.fullImage} alt={data?.name} />
          </ImageWrapper>
          <MovieCardDetail movie={data} />
          <div>{data.longDescription}</div>
          <Review id={id} />
        </Content>
      </FullPage>
    </IonPage>
  );
};

export default Single;
