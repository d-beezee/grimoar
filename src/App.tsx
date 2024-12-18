import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
// import "@ionic/react/css/display.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import { theme } from "@src/components/theme";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import LoggedIn from "./components/LoggedIn";
import NotLoggedIn from "./components/NotLoggedIn";
import Home from "./pages/Home";
import Single from "./pages/Single";
import { store } from "./store";
import "./theme/reset.css";
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route
              path="/login"
              component={(props: any) => (
                <NotLoggedIn>
                  <Login {...props} />
                </NotLoggedIn>
              )}
              exact={true}
            />
            <Route
              path="/signup"
              component={(props: any) => (
                <NotLoggedIn>
                  <Signup {...props} />
                </NotLoggedIn>
              )}
              exact={true}
            />
            <Route
              path="/dashboard"
              component={(props: any) => (
                <LoggedIn>
                  <Dashboard {...props} />
                </LoggedIn>
              )}
              exact={true}
            />
            <Route
              path="/home"
              component={(props: any) => (
                <NotLoggedIn>
                  <Home {...props} />
                </NotLoggedIn>
              )}
              exact={true}
            />
            <Route
              path="/games/:id"
              component={(props: any) => (
                <LoggedIn>
                  <Single {...props} />
                </LoggedIn>
              )}
              exact={true}
            />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Provider>
  </ThemeProvider>
);
export default App;
