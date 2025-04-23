import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  boxStyle,
  containerStyle,
  headingStyle,
  boxesWrapperStyle,
} from "./Styles";

const pageVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const StudentPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Box>
        <div style={containerStyle}>
          <h1 style={headingStyle}>Select the option to enter details!</h1>
          <div style={boxesWrapperStyle}>
            <Link style={boxStyle} to="/study-details" className="miniBox">
              Higher Studies
            </Link>
            <Link style={boxStyle} className="miniBox" to="/exam-details">
              Competitive Exam
            </Link>
          </div>
        </div>
      </Box>
    </motion.div>
  );
};

export default StudentPage;
