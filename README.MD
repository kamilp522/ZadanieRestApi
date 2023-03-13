# Books API

This API allows users to see, save and delete records of books to the sqlite database.

## Install

Clone the repository, then:

    npm install

## Run the API

    npm start

### Endpoints

1. **`/books`** (method: GET, request parameters: none, body: none) --> Endpoint that show all book records saved in the database.

2. **`/books/add`** (method: POST, request parameters: none, body: yes) --> This endpoint allows user to add a new book record to the database. Request has to contain body in json format, with both title and author of the book.

3. **`/books/delete/:id`** (method: DELETE, request parameters: yes, body: none) --> Endpoint for deleting a single book record. Requires the book record id provided as a parameter in the request.

## Testing endpoints

Project contains file requests.rest that show examples of http requests for the specified endpoints. Require [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) for Visual Studio Code.

[Postman](https://www.postman.com/) is also popular for testing API endpoints and might be used instead of REST Client extension.

### Technologies used

1. [NodeJS](https://nodejs.org/) Runtime environment used in running JavaScript codes on the server.

2. [ExpressJS](https://www.expresjs.org/) NodeJS web application framework.

3. [Sqlite](https://www.sqlite.org/index.html) Small, fast and full-featured SQL database engine.

4. [Sequelize](https://sequelize.org/) Sequelize is a modern TypeScript and Node.js ORM.

5. [TypeScript](https://typescriptlang.org/) Superset of JavaScript that adds optional static typing to the language.
