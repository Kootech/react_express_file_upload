import express from "express";
import multer from "multer";

import {
  getItems,
  addItem,
  updateItem,
  deleteItem,
} from "../controllers/items.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, new Date.now() + file.filename);
  },
});

const router = express.Router();

router.get("/", getItems);
router.post("/", addItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
