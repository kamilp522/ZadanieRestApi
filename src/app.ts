import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Hello, world!");
});

export default app;
