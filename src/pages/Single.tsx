import { IonPage } from "@ionic/react";
import { FullPage } from "@src/components/templates/FullPage";
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
  ${({ theme }) => Title(theme)}
  color: #fff;
  margin: 0;
`;

const Single: React.FC = () => {
  const { data, isLoading, isError, error } = useGetGamesQuery();

  return (
    <IonPage>
      <FullPage>Hello</FullPage>
    </IonPage>
  );
};

export default Single;
