import { Model, DataTypes } from "sequelize";
import sequelize from "../../database/database";

class Book extends Model {}

Book.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "book",
  }
);

export default Book;
