import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });

const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);

const URL = process.env.URL || `http://localhost:${PORT}`;

app.get("/", (_, res) => {
  res.send(`Server is running at ${URL}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${URL}`);
});
