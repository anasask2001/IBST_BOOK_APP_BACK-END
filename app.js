import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import booksroute from "./routes/book_route.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",booksroute);

export default app;
