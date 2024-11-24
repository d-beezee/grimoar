import { IonContent } from "@ionic/react";
import { Sidebar } from "@src/components/molecules/sidebar";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(true);
  return (
    <IonContent fullscreen className="ion-padding">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header slot="fixed" />
      <Wrapper>{children}</Wrapper>
    </IonContent>
  );
};
