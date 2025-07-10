import "dotenv/config";
import express from "express";

import logger from "./libs/logger";

const port = process.env.PORT || 4200;
const app = express();

app.use(express.json());

app.use("/health", (_req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
