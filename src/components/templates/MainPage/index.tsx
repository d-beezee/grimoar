import { IonContent } from "@ionic/react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 12px;
  background-color: #000;
  margin-top: 122px;
  min-height: 100vh;
`;

const Header = styled.div`
  height: 122px;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.secondary};
  top: 0;
  width: 100%;
`;

export const MainPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <IonContent fullscreen className="ion-padding">
      <Header slot="fixed" />
      <Wrapper>{children}</Wrapper>
    </IonContent>
  );
};
