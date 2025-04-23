import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { boxStyle, headingStyle, boxesWrapperStyle } from "./Styles";

const HomePage = () => {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: "gradientBG 15s ease infinite",
  };

  return (
    <>
      <style>
        {`
          @keyframes gradientBG {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
        ,
      </style>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Welcome to the Higher Studies Portal</h1>
        <div style={boxesWrapperStyle}>
          <Link style={boxStyle} className="miniBox" to={"/student"}>
            Student
          </Link>
          <Link style={boxStyle} className="miniBox" to={"/faculty"}>
            Faculty
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
