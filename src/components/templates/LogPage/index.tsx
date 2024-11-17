import { IonContent } from "@ionic/react";
import { ReactComponent as ArrowBack } from "@src/components/icons/arrow_back.svg";
import styled from "styled-components";

const BackContainer = styled.div`
  display: flex;
  padding: 10px 20px;
`;
const Back = () => {
  return (
    <BackContainer>
      <ArrowBack onClick={() => (window.location.href = "/home")} width={26} />
    </BackContainer>
  );
};

export const LogPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <IonContent fullscreen className="ion-padding">
        <Back />
        {children}
      </IonContent>
    </>
  );
};
