import { IonContent } from "@ionic/react";
import { ReactComponent as SearchIcon } from "@src/components/icons/ic_baseline-search.svg";
import { ReactComponent as BarMenu } from "@src/components/icons/uil_bars.svg";
import { Title } from "@src/components/typography";
import { useState } from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";

const Wrapper = styled.div`
  padding: 12px;
  background-color: #000;
  margin-top: 122px;
  min-height: 100vh;
`;

const Header = styled.div`
  height: 122px;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background};
  top: 0;
  width: 100%;
  padding: 30px 20px 8px 20px;

  .topbar {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => Title(theme)};
  }
`;

export const MainPage = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <IonContent fullscreen className="ion-padding">
      <Sidebar
        user={{ name: "james", avatar: "https://place-hold.it/100x100" }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Header slot="fixed">
        <div className="topbar">
          <BarMenu onClick={() => setIsOpen(!isOpen)} />
          <h1>{title}</h1>
          <SearchIcon onClick={() => alert("sorry, not implemented yet")} />
        </div>
      </Header>
      <Wrapper>{children}</Wrapper>
    </IonContent>
  );
};
