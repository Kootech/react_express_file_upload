import express from "express";
import multer from "multer";

import {
  getItems,
  addItem,
  updateItem,
  deleteItem,
} from "../controllers/items.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.get("/", getItems);
router.post("/", upload.single("image"), addItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
