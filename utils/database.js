import mongoose from "mongoose";

let isConnected = false; // true if connection is established

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return isConnected;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Testing",
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
  return isConnected;
};
