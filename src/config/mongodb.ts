import mongoose from "mongoose";

export async function connectToMongoDB() {
  try {
    const uri = process.env.MONGO_DB_URI || "mongodb://localhost:27017/tasks";
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
