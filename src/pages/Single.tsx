import { IonPage } from "@ionic/react";
import { MovieCardDetail } from "@src/components/molecules/moviecardDetail";
import { FullPage } from "@src/components/templates/FullPage";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useGetGamesByIdQuery } from "../features/api";

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
        <ImageWrapper>
          <img src={data?.fullImage} alt={data?.name} />
        </ImageWrapper>
        <MovieCardDetail movie={data} />
        <div>{data.longDescription}</div>
      </FullPage>
    </IonPage>
  );
};

export default Single;
