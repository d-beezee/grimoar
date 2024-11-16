import {
  IonAlert,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Button } from "@src/components/atoms/button";
import { personCircle } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NotLoggedIn from "../components/NotLoggedIn";
import { usePostAuthPasswordMutation } from "../features/api";

function validateEmail(email: string) {
  const re =
    /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}
const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [login] = usePostAuthPasswordMutation();
  const handleLogin = () => {
    if (!email) {
      setMessage("Please enter a valid email");
      setIserror(true);
      return;
    }
    if (validateEmail(email) === false) {
      setMessage("Your email is invalid");
      setIserror(true);
      return;
    }

    if (!password || password.length < 6) {
      setMessage("Please enter your password");
      setIserror(true);
      return;
    }

    const loginData = {
      email: email,
      password: password,
    };

    login({ body: loginData })
      .unwrap()
      .then((res) => {
        res.token && localStorage.setItem("token", res.token);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setMessage("Auth failure! Please create an account");
        setIserror(true);
      });
  };

  return (
    <NotLoggedIn>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding ion-text-center">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonAlert
                  isOpen={iserror}
                  onDidDismiss={() => setIserror(false)}
                  cssClass="my-custom-class"
                  header={"Error!"}
                  message={message}
                  buttons={["Dismiss"]}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonIcon
                  style={{ fontSize: "70px", color: "#0040ff" }}
                  icon={personCircle}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating"> Email</IonLabel>
                  <IonInput
                    type="email"
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating"> Password</IonLabel>
                  <IonInput
                    type="password"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <p style={{ fontSize: "small" }}>
                  By clicking LOGIN you agree to our <a href="#">Policy</a>
                </p>
                <Button kind="primary" onClick={handleLogin}>
                  Login
                </Button>
                <p style={{ fontSize: "medium" }}>
                  Don't have an account? <a href="/signup">Sign up!</a>
                </p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </NotLoggedIn>
  );
};

export default Login;
