import dotenv from "dotenv";
import { app } from "./app.js";
import connectDb from "./db/index.js";
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT;

connectDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.log("Error connecting with MongoDB", error);
    process.exit(1);
  });
