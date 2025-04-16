import mongoose from "mongoose";

const reflectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  emoji: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reflection = mongoose.model("Reflection", reflectionSchema);

export default Reflection;
