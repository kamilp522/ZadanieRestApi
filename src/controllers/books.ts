import express, { Request, Response } from "express";
import Book from "../models/book";
import { BookEntry } from "../types/BookEntry";

const booksRouter = express.Router();

booksRouter.get("/", async (_request: Request, response: Response) => {
  const books = await Book.findAll();
  response.status(200).send(books);
});

booksRouter.post("/add", async (request: Request, response: Response) => {
  const bookEntry: BookEntry = request.body;

  try {
    await Book.create(bookEntry);
    response.status(201).send("Created a new book record");
  } catch (exception: any) {
    response.status(400).send(exception.errors[0].message);
  }
});

booksRouter.delete("/delete/:id", async (request: Request, response: Response) => {
  const requestId = request.params.id;

  try {
    const bookToDelete = await Book.findByPk(requestId);

    if (!bookToDelete) throw "Book with that id does not exist";

    await bookToDelete.destroy();

    response.status(200).end();
  } catch (exception) {
    response.status(404).send(exception);
  }
});

export default booksRouter;
