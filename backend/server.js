import express from "express";
import _ from "dotenv/config";
import cors from "cors";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import itemRouter from "./routers/items.js";
import connectDB from "./config_db.js";

const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

connectDB();

const app = express();
app.use(cors());

app.use("/items", itemRouter);

app.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(__dirname, `/uploads/${imageName}`));
});

app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
