import { Route, Router, Switch } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import React from "react";
import SecretWeather from "./components/SecretWeather";
import history from "./utils/history";
import { useAuth0 } from "./auth/Auth0Provider";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile" Component={Profile} />
            <PrivateRoute path="/secretweather" Component={SecretWeather} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
