import express from "express";
import bodyParser from "body-parser";
import sequlize from "../database/database";

sequlize
  .sync()
  .then(() => console.log("Established connection to the database"));

const app = express();

app.use(bodyParser.json());

export default app;
