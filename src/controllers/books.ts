import express, { Request, Response } from "express";
import Book from "../models/book";
import { BookEntry } from "../types/BookEntry";

const booksRouter = express.Router();

booksRouter.get("/", async (_request: Request, response: Response) => {
  const books = await Book.findAll();
  response.send(books);
});

booksRouter.post("/add", async (request: Request, response: Response) => {
  const bookEntry: BookEntry = request.body;
  await Book.create(bookEntry);
  response.send("Created a new book record");
});

booksRouter.delete(
  "/delete/:id",
  async (request: Request, response: Response) => {
    const requestId = request.params.id;
    await Book.destroy({ where: { id: requestId } });
    response.send(`Deleted book record with id ${requestId}`);
  }
});

export default booksRouter;
