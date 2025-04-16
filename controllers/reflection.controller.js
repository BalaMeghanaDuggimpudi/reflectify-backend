import Reflection from "../models/reflection.model.js";

// Create a new reflection
export const createReflection = async (req, res, next) => {
  try {
    const { title, emoji, description } = req.body;

    const newReflection = await Reflection.create({
      title,
      emoji,
      description,
    });

    return res.status(201).json(newReflection);
  } catch (error) {
    next(error);
  }
};

// Get all reflections
export const getAllReflections = async (req, res, next) => {
  try {
    const reflections = await Reflection.find();
    return res.status(200).json(reflections);
  } catch (error) {
    next(error);
  }
};

// Get a single reflection by ID
export const getReflectionById = async (req, res, next) => {
  try {
    const reflection = await Reflection.findById(req.params.id);
    if (!reflection) {
      return res.status(404).json({ message: "Reflection not found" });
    }
    return res.status(200).json(reflection);
  } catch (error) {
    next(error);
  }
};

// Update a reflection by ID
export const updateReflectionById = async (req, res, next) => {
  try {
    const reflection = await Reflection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!reflection) {
      return res.status(404).json({ message: "Reflection not found" });
    }

    return res.status(200).json(reflection);
  } catch (error) {
    next(error);
  }
};

// Delete a reflection by ID
export const deleteReflectionById = async (req, res, next) => {
  try {
    const reflection = await Reflection.findByIdAndDelete(req.params.id);

    if (!reflection) {
      return res.status(404).json({ message: "Reflection not found" });
    }

    return res.status(200).json({ message: "Reflection deleted successfully" });
  } catch (error) {
    next(error);
  }
};
