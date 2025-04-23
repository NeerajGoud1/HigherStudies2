import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
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

const FacultyPage = () => {
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div style={containerStyle}>
          <h1 style={headingStyle}>Select The Category To Generate Data!</h1>
          <div style={boxesWrapperStyle}>
            <Link
              style={boxStyle}
              className="miniBox"
              to={"/heigherStudies-report"}
            >
              Higher Studies
            </Link>
            <Link style={boxStyle} className="miniBox" to={"/exam-report"}>
              Competitive Exam
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FacultyPage;
