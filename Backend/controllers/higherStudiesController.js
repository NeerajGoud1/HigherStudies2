import { Higherstudies } from "../models/higherStudiesSchema.js";
import httpStatus from "http-status";
import { ExamSchema } from "../models/ExamSchema.js";

const store = async (req, res) => {
  const data = req.body;

  if (
    !data.name ||
    !data.rollNo ||
    !data.joiningInstitute ||
    !data.joiningYear ||
    !data.passedOutYear
  ) {
    return res
      .status(400)
      .json({ message: "Please provide all required information" });
  }

  try {
    const newData = new Higherstudies({
      name: data.name,
      rollNo: data.rollNo,
      joiningInstitute: data.joiningInstitute,
      joiningYear: data.joiningYear,
      passedOutYear: data.passedOutYear,
    });

    await newData.save();
    res
      .status(httpStatus.OK)
      .json({ message: "Data Inserted Successfully", data: newData });
    console.log("Data Inserted Successfully");
  } catch (err) {
    if (err.errorResponse.code === 11000) {
      res
        .status(httpStatus.IM_USED)
        .json({ message: "User Already Submited Details!" });
    } else {
      res.status(500).json({ message: "error in inserting data" });
    }
  }
};

const storeExamData = async (req, res) => {
  const data = req.body;

  if (
    !data.rollNo ||
    !data.exam ||
    !data.regNo ||
    !data.passedOutYear ||
    !data.name
  ) {
    return res
      .status(400)
      .json({ message: "Please provide all required information" });
  }

  try {
    const newData = new ExamSchema({
      name: data.name,
      rollNo: data.rollNo,
      examType: data.exam,
      registrationNo: data.regNo,
      passedOutYear: data.passedOutYear,
    });

    await newData.save();
    res
      .status(httpStatus.OK)
      .json({ message: "Data Inserted Successfully", data: newData });
    console.log("Data Inserted Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error in inserting data" });
  }
};

const getHigherStudiesReport = async (req, res) => {
  try {
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const matchStage = {};
    if (!isNaN(from)) matchStage.passedOutYear = { $gte: from };
    if (!isNaN(to)) {
      matchStage.passedOutYear = {
        ...matchStage.passedOutYear,
        $lte: to,
      };
    }

    const result = await Higherstudies.aggregate([
      { $match: matchStage },
      {
        $group: {
          _id: "$passedOutYear",
          total: { $sum: 1 },
        },
      },
      { $sort: { _id: -1 } },
    ]);

    res.status(200).json(result);
  } catch (error) {
    console.error("Report generation error:", error);
    res.status(500).json({ message: "Failed to generate report" });
  }
};
// Add this if not already defined:
const getHigherStudiesDetailsByYear = async (req, res) => {
  try {
    const year = parseInt(req.params.year);
    const students = await Higherstudies.find({ passedOutYear: year });
    res.status(200).json(students);
  } catch (error) {
    console.error("Details fetch error:", error);
    res.status(500).json({ message: "Failed to fetch details" });
  }
};

const getExamReport = async (req, res) => {
  try {
    const data = await ExamSchema.aggregate([
      {
        $group: {
          _id: {
            examType: "$examType",
            passedOutYear: "$passedOutYear",
          },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          examType: "$_id.examType",
          passedOutYear: "$_id.passedOutYear",
          count: 1,
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error generating report", error: err });
  }
};

const getDetailedExamReport = async (req, res) => {
  const year = parseInt(req.params.year);
  try {
    const data = await ExamSchema.find({ passedOutYear: year });
    res.status(200).json(data);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching year-wise data", error: err });
  }
};

export {
  store,
  storeExamData,
  getHigherStudiesReport,
  getExamReport,
  getHigherStudiesDetailsByYear,
  getDetailedExamReport,
};
