import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  passedOutYear: {
    //previous institute
    type: Number,
    required: true,
  },
  examType: {
    type: String,
    required: true,
  },
  registrationNo: {
    type: String,
    required: true,
  },
});

const ExamSchema = mongoose.model("ExamSchema", examSchema);

export { ExamSchema };
