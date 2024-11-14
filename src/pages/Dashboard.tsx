import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItemDivider,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useGetProtectedQuery } from "../features/api";

const Dashboard: React.FC = () => {
  const { data, isLoading, isError, error } = useGetProtectedQuery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        {isLoading && <div>Loading...</div>}
        {isError && <div>{JSON.stringify(error)}</div>}
        {!isLoading && !isError && (
          <IonGrid>
            <IonRow>
              <IonCol>
                <h4>Welcome {JSON.stringify(data)}</h4>
                <IonItemDivider></IonItemDivider>
                <IonButton
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  Logout
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
