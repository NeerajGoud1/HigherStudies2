import { Router } from "express";
import {
  store,
  storeExamData,
  getHigherStudiesReport,
  getExamReport,
  getHigherStudiesDetailsByYear,
  getDetailedExamReport,
} from "../controllers/higherStudiesController.js";

const router = Router();

router.route("/store").post(store);
router.route("/storeExamData").post(storeExamData);
router.get("/generate-heigherStudies-report", getHigherStudiesReport);
router.get("/generate-exam-report", getExamReport);
router.get("/details/:year", getHigherStudiesDetailsByYear);
router.get("/year-wise-detail/:year", getDetailedExamReport);

export default router;
