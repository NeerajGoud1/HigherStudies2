import mongoose, { Schema } from "mongoose";

const higherstudiesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  rollNo: {
    type: String,
    required: true,
    unique: true,
  },

  joiningInstitute: {
    type: String,
    required: true,
  },

  joiningYear: {
    //new institute joining year
    type: Number,
    required: true,
  },

  passedOutYear: {
    //previous institute
    type: Number,
    required: true,
  },
});

const Higherstudies = mongoose.model("Higherstudies", higherstudiesSchema);

export { Higherstudies };
