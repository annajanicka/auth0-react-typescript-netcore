import { Link } from "react-router-dom";
import React from "react";
import { useAuth0 } from "../auth/Auth0Provider";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <h1>Welcome to Auth0 Example App</h1>
      <p>Home page is accessible for everyone!</p>
      {!isAuthenticated && (
        <p>
          Login to see some secret weather forecast and the details of your
          profile!
        </p>
      )}
      {isAuthenticated && (
        <ul>
          <li>
            Go to <Link to="/profile">Your Profile</Link> to see the details of
            your user
          </li>
          <li>
            Go to <Link to="/secretweather">Secret Weather</Link> to see
            completely random and pointless weather from the API
          </li>
        </ul>
      )}
    </>
  );
};

export default Home;
