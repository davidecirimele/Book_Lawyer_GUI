import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import { AppBar, Toolbar, Button, Grid, SvgIcon, Link } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <AppBar style={{ background: "#000842" }}>
        <Toolbar>
          <Grid container style={{ top: "auto", bottom: 0, border: "none" }}>
            <Grid item xs={12} sm={8} md={8} xl={8}>
              <NavLink to="/">
                <SvgIcon viewBox="0 0 109 51" />
              </NavLink>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4}>
            <ul>
              <li>
                <div component={NavLink} to="/explore">
                  profile
                </div>
              </li>
              <li></li>
            </ul>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
