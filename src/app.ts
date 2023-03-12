import express from "express";
import bodyParser from "body-parser";

import { connectToDatabase } from "./config/config";

import booksRouter from "./controllers/books";

connectToDatabase();

const app = express();

app.use(bodyParser.json());
app.use("/books", booksRouter);

export default app;
