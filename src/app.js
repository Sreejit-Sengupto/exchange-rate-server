import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());

import marketRouter from "./routes/market.route.js";

app.use("/api/v1/market", marketRouter);

export { app };
