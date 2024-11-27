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

const BackButton = styled.div``;

export const FullPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <IonContent fullscreen>
      <BackButton slot="fixed">
        <IonBackButton
          style={{
            top: 30,
            left: 25,
            background: "#fff",
            display: "block",
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            color: "#000",
          }}
        />
      </BackButton>
      <Wrapper>{children}</Wrapper>
    </IonContent>
  );
};
