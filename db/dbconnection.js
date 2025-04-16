import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `✅ MongoDB connected to host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message); // ✅ Add error details
    process.exit(1); // optional: stop the server if DB fails
  }
};
