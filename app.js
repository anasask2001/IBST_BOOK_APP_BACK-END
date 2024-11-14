import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import books from "./routes/book_route.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",books);

export default app;
