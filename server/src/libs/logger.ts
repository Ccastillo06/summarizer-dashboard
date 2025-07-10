import { createLogger, format, transports } from "winston";

const jsonLogger = () =>
  createLogger({
    level: process.env.LOG_LEVEL,
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.Console()],
  });

export default jsonLogger();
