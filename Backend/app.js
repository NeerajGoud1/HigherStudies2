import express from "express";
import mongoose from "mongoose";
import { createServer } from "node:http";
import higherStudiesRoutes from "./routes/higherStudiesRoutes.js";
import cors from "cors";

const app = express();
const server = createServer(app);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //for parsing post request

app.use("/api/higherStudies", higherStudiesRoutes);

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  res.status(statusCode).json({ message });
});

const start = async () => {
  await mongoose.connect(
    "mongodb+srv://neeraj:neeraj@higherstudiesfp.qfkw1bh.mongodb.net/"
  );

  console.log("connected to DB");
  server.listen("8080", () => {
    console.log("Server is running on port 8080");
  });
};

start();
