import { Logger } from "./LoggerService";
import { Sequelize } from "sequelize-typescript";
import { config } from "../config";
import { FreeTrialModel } from "../models/FreeTrialModel";

const sequelize = new Sequelize({
  database: config.database.databasename,
  username: config.database.username,
  password: config.database.password,
  host: config.database.host,
  port: +config.database.port,
  dialect: "mysql",
  dialectModule: require('mysql2'),
  models: [FreeTrialModel],
});

const logger = Logger.getLogger();

export const DatabaseService = {
  connect(callback: (callbackMessage?: string) => void) {
    sequelize
      .authenticate()
      .then(() => {
        logger.info("Connection has been established successfully.");
        callback();
      })
      .catch((error) => {
        callback(error);
      });
  },
};

DatabaseService.connect((error) => {
  if (error) {
    logger.error({
      message: "Error connecting to database",
      error,
    });
    process.exit(1);
  } else {
    console.log('Connected to database')
  }
});

