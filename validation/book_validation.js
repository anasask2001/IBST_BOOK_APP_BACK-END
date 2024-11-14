"use strict";
import Joi from "joi";

const book_validation = Joi.object({
  title: Joi.string().min(4).required().messages({
    "string.base": "title should be a string",
    "string.empty": "title cannot be empty",
    "any.required": "title is required",
  }),

  author: Joi.string().min(4).required().messages({
    "string.base": "Author Name should be a string",
    "string.empty": "Author Name cannot be empty",
    "any.required": "Author Name is required",
  }),

  description: Joi.string().min(20).required().messages({
    "string.min": "Description must be greater than 20 characters",
    "any.required": "Description is required",
  }),
});

export { book_validation };
