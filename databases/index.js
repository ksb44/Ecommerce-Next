import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

let isConnected = false;
const connectDB = async () => {
  try {
    if (!isConnected) {
      const connectionInstance = await mongoose.connect(
        `${process.env.MONGODB_URI}/${DB_NAME}`
      );
      // console.log(`MongoDb connected ${connectionInstance.connection.host}`);
      isConnected = true;
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
