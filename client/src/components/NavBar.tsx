import { IconButton, Theme, createStyles, makeStyles } from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Home from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import WbCloudy from "@material-ui/icons/WbCloudy";
import { useAuth0 } from "../auth/Auth0Provider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  })
);

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Auth0 Example App
        </Typography>
        <IconButton
          aria-label="home"
          aria-controls="menu-appbar"
          color="inherit"
          component={Link}
          to="/"
        >
          <Home />
        </IconButton>
        {isAuthenticated && (
          <React.Fragment>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              color="inherit"
              component={Link}
              to="/profile"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              aria-label="secret weather"
              aria-controls="menu-appbar"
              color="inherit"
              component={Link}
              to="/secretweather"
            >
              <WbCloudy />
            </IconButton>
          </React.Fragment>
        )}
        {!isAuthenticated && (
          <Button onClick={() => loginWithRedirect()} color="inherit">
            Login
          </Button>
        )}
        {isAuthenticated && (
          <Button onClick={() => logout()} color="inherit">
            Log out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
