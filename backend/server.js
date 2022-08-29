import express from "express";
import _ from "dotenv/config";
import cors from "cors";

import itemRouter from "./routers/items.js";
import connectDB from "./config_db.js";

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());

app.use("/items", itemRouter);

app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
