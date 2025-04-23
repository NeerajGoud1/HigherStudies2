import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HigherStudiesForm from "./pages/HigherStudiesForm";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ExamForm from "./pages/EaxmForm";
import HomePage from "./pages/HomePage";
import StudentPage from "./pages/StudentPage";
import HigherStudiesReport from "./pages/HigherStudiesReport";
import ExamReport from "./pages/ExamReport";
import FacultyPage from "./pages/FacultyPage";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/study-details" element={<HigherStudiesForm />}></Route>
          <Route path="/exam-details" element={<ExamForm />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/student" element={<StudentPage />}></Route>
          <Route
            path="/heigherStudies-report"
            element={<HigherStudiesReport />}
          ></Route>
          <Route path="/exam-report" element={<ExamReport />} />
          <Route path="/faculty" element={<FacultyPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
