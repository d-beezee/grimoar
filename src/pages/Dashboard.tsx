import { IonPage } from "@ionic/react";
import { MovieCard } from "@src/components/molecules/moviecard";
import { MainPage } from "@src/components/templates/MainPage";
import { Title } from "@src/components/typography";
import React from "react";
import styled from "styled-components";
import { useGetGamesQuery } from "../features/api";

const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey600};

  &:last-child {
    border-bottom: none;
  }
`;

const TitleWrapper = styled.h1`
  ${({ theme }) => `${Title(theme)}`}
  color: #fff;
  margin: 0;
`;

const Dashboard: React.FC = () => {
  const { data, isLoading, isError, error } = useGetGamesQuery();

  return (
    <IonPage>
      <MainPage>
        <TitleWrapper>Popular this week</TitleWrapper>

        <div style={{ color: "white" }}>
          {isLoading && <div>Loading...</div>}
          {isError && <div>{JSON.stringify(error)}</div>}
          {!isLoading &&
            !isError &&
            data &&
            data.length > 0 &&
            data.map((game) => (
              <MovieCardWrapper key={game.name}>
                <MovieCard movie={game} />
              </MovieCardWrapper>
            ))}
        </div>
      </MainPage>
    </IonPage>
  );
};

export default Dashboard;
