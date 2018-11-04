import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import "./nav.scss";

const Nav = () => (
  <div className="navbar">
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className="menu-icon"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
        >
          Roomie Receipt
        </Typography>
        <Button color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Nav;
