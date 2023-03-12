import express from "express";
import bodyParser from "body-parser";
import sequlize from "../database/database";

import booksRouter from "./controllers/books";

sequlize
  .sync()
  .then(() => console.log("Established connection to the database"));

const app = express();

app.use(bodyParser.json());
app.use("/books", booksRouter);

export default app;
