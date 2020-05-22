import "./index.css";
import "typeface-roboto";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import { Auth0Provider } from "./auth/Auth0Provider";
import React from "react";
import ReactDOM from "react-dom";
import history from "./utils/history";

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      onRedirectCallback={onRedirectCallback}
      client_id={process.env.REACT_APP_AUTH0_CLIENTID || ""}
      domain={process.env!.REACT_APP_AUTH0_DOMAIN || ""}
      audience={process.env!.REACT_APP_AUTH0_AUDIENCE}
      cacheLocation={"localstorage"} // if you don't want to keep tokens in memory
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
