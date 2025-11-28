import express from "express";
import dotenv from "dotenv";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth/auth.js";

dotenv.config({ path: ".env.local", quiet: true });

const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);

const URL = process.env.URL || `http://localhost:${PORT}`;

app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running at ${URL}`);
});
