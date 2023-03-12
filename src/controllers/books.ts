import express from "express";
import Book from "../models/book";

const booksRouter = express.Router();

booksRouter.get("/", async (_request, response) => {
  const books = await Book.findAll();
  response.send(books);
});

booksRouter.post("/add", async (request, response) => {
  await Book.create(request.body);
  response.send("Created a new book record");
});

booksRouter.delete("/delete/:id", async (request, response) => {
  const requestId = request.params.id;
  await Book.destroy({ where: { id: requestId } });
  response.send(`Deleted book record with id ${requestId}`);
});

export default booksRouter;
