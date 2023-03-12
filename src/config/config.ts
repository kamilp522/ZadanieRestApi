import sequlize from "../../database/database";

export const connectToDatabase = async () => {
  await sequlize.sync();
  console.log("Established connection to the database");
};
