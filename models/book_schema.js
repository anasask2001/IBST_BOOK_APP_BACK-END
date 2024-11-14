import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,  
    },
    description: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 1000,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,  
  }
);


const Books = mongoose.model("Books", bookSchema);

export { Books };
