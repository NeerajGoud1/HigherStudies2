import mongoose from "mongoose";
import { ExamSchema } from "./models/ExamSchema.js"; // make sure the path is correct

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://neeraj:neeraj@higherstudiesfp.qfkw1bh.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const examTypes = ["GATE", "GRE", "IELTS", "TOEFL", "DUOLINGO", "PTE", "MAT"];
const passedOutYears = [2020, 2021, 2022, 2023];
const names = [
  "Neeraj",
  "Akash",
  "Sai",
  "Raj",
  "Anjali",
  "Sneha",
  "Ravi",
  "Kiran",
  "Meena",
  "Arjun",
]; // sample names

// Generate random data
const generateRandomExamData = (index) => {
  const examType = examTypes[Math.floor(Math.random() * examTypes.length)];
  const passedOutYear =
    passedOutYears[Math.floor(Math.random() * passedOutYears.length)];
  const rollNo = `CS${String(index).padStart(3, "0")}`;
  const registrationNo = `${examType}-${Math.floor(Math.random() * 100000)}`;
  const name = names[Math.floor(Math.random() * names.length)];

  return {
    name,
    rollNo,
    passedOutYear,
    examType,
    registrationNo,
  };
};

// Seed data into DB
const seedExams = async () => {
  try {
    const data = [];
    for (let i = 1; i <= 100; i++) {
      data.push(generateRandomExamData(i));
    }

    await ExamSchema.insertMany(data);
    console.log("✅ Inserted 100 sample exam records successfully.");
  } catch (err) {
    console.error("❌ Error inserting sample data:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedExams();
