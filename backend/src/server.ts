import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";

const dbPath = path.resolve("prisma/todo.db");

console.log("DB PATH:", dbPath);
console.log("DB EXISTS:", fs.existsSync(dbPath));
console.log("DATABASE_URL:", process.env.DATABASE_URL);

import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});