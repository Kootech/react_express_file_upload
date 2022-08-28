import express from "express";

import itemRouter from "./routers/items.js";
import connectDB from "./config_db";

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use("/items", itemRouter);

app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
