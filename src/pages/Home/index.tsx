import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Button } from "@src/components/atoms/button";
import { ReactComponent as Login } from "@src/components/icons/material-symbols_login.svg";
import Background from "./assets/Background.jpg";
import Logo from "./assets/Logo.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div
          style={{
            background: `url(${Background})`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <IonImg src={Logo} style={{ width: "100%", maxWidth: "100%" }} />
          <div
            style={{
              padding: "0 20px 50px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            <Button
              onClick={() => {
                window.location.href = "/signup";
              }}
              icon={<Login />}
            >
              Join Grimoar
            </Button>
            <Button
              onClick={() => {
                window.location.href = "/login";
              }}
              kind="secondary"
            >
              Sign In
            </Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
