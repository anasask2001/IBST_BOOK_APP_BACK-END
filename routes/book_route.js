"use strict";
import express from "express";
import validate from "../middleware/validate.js";
import { book_validation } from "../validation/book_validation.js";
import { createbook, deletebook, getallbooks } from "../controller/book_controller.js";
import { trycatch } from "../middleware/trycatch.js";

const route = express.Router();
route.post("/books",validate(book_validation),trycatch(createbook));
route.get("/books",trycatch(getallbooks));
route.patch("/books/:id",trycatch(deletebook));

export default route;
