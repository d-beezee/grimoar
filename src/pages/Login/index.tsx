import { IonAlert, IonImg, IonPage, useIonLoading } from "@ionic/react";
import { GoogleButton } from "@src/components/atoms/googleButton";
import { Signin } from "@src/components/molecules/signin";
import { LogPage } from "@src/components/templates/LogPage";
import React, { useState } from "react";
import NotLoggedIn from "../../components/NotLoggedIn";
import { usePostAuthPasswordMutation } from "../../features/api";
import Image from "./assets/Image.jpg";
import { useGoogleLogin } from "./googleLogin";

function validateEmail(email: string) {
  const re =
    /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}
const Login: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [login] = usePostAuthPasswordMutation();
  const [present, dismiss] = useIonLoading();

  const { loginWithGoogle } = useGoogleLogin();
  const handleLogin = async (email: string, password: string) => {
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

    present({
      message: "Signing in...",
    });
    setIsSubmitting(true);
    login({ body: loginData })
      .unwrap()
      .catch((error) => {
        console.log(error);
        setMessage("Auth failure! Please create an account");
        setIserror(true);
      })
      .finally(() => {
        setIsSubmitting(false);
        dismiss();
      });
  };

  return (
    <NotLoggedIn>
      <IonPage>
        <LogPage>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <IonAlert
              isOpen={iserror}
              onDidDismiss={() => setIserror(false)}
              cssClass="my-custom-class"
              header={"Error!"}
              message={message}
              buttons={["Dismiss"]}
            />
            <IonImg src={Image} />
            <div style={{ padding: "0 30px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <GoogleButton
                  onClick={() => {
                    present({
                      message: "Signing in...",
                    });
                    loginWithGoogle();
                    dismiss();
                  }}
                >
                  Login with Google
                </GoogleButton>
              </div>
              <Signin disabled={isSubmitting} onSignin={handleLogin} />
            </div>
          </div>
        </LogPage>
      </IonPage>
    </NotLoggedIn>
  );
};

export default Login;
