import express from "express";
import {
  createReflection,
  getAllReflections,
  getReflectionById,
  updateReflectionById,
  deleteReflectionById,
} from "../controllers/reflection.controller.js";
const router = express.Router();

router.post("/", createReflection);
//console.log("✅ Reflectify routes loaded");
router.get("/", getAllReflections);
router.get("/:id", getReflectionById);
router.put("/:id", updateReflectionById);
router.delete("/:id", deleteReflectionById);

export default router;
