import { IonBackButton, IonContent } from "@ionic/react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

const BackButton = styled.div`
  top: 50px;
  left: 25px;
  .back-button {
    background: #fff;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    color: #000;
  }
`;

export const FullPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <IonContent fullscreen>
      <BackButton slot="fixed">
        <IonBackButton className="back-button" />
      </BackButton>
      <Wrapper>{children}</Wrapper>
    </IonContent>
  );
};
