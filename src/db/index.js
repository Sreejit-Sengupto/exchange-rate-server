import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const mongoDbConnection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("Connected to MongoDB successfully!");
    console.log(`Connection host: ${mongoDbConnection.connection.host}`);
  } catch (error) {
    console.log("Something went wrong while connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDb;
