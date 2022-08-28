import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongo db connected`);
  } catch (error) {
    console.log(`error occurred connecting to mongo ${error}`);
  }
};

export default connectDB;
