"use strict";
import mongoose from "mongoose";
const book_schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 1000,
  },
  isActive:{
    type:Boolean,
    default: true
  },
},
{
    timestamps: true,
  }
);

const Books = mongoose.model("Books",book_schema)
export{Books} 