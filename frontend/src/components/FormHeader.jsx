import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function FormHeader() {
  return (
    <div>
      {" "}
      <AppBar position="static" sx={{ mb: 4, backgroundColor: "white" }}>
        <Toolbar>
          <img
            src={logo}
            style={{
              width: "200px",
              height: "55px",
              position: "absolute",
              left: 0,
            }}
            alt="VNRVJIET Logo"
          />

          <Link className="backBtn" to="/student" role="button">
            Back
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
