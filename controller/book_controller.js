import {Books} from "../models/book_schema.js"
// creating book
export const createbook = async (req, res) => {
  const { title, author, description } = req.body;
  if (!title || !author || !description) {
    return res
      .status(400)
      .json({ status: "failed", message: "Fileds are required" });
  }
  const ifexsitingbook = await Books.findOne({ title });
  if (ifexsitingbook) {
    return res
      .status(409)
      .json({ status: "failed", message: "Book already exists" });
  }

  const newbook = new Books({ title, author, description });
  await newbook.save();
  return res
    .status(201)
    .json({
      status: "success",
      message: "Book created successfully",
      data: newbook,
    });
};

// getting all books
export const getallbooks = async (req, res) => {
  const allboooks = await Books.find({ isActive: true });
  if (!allboooks) {
    return res.status(404).json({
      status: "failed",
      message: "No books found",
    });
  }
  res.status(200).json(allboooks);
};

// delete to soft copy
export const deletebook = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Book ID is required" });
  }

  const deletebook = await Books.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );

  if (!deletebook) {
    return res.status(404).json({ message: "Book not found" });
  }
  res
    .status(200)
    .json({ message: "Book Deleted successfully", deletebook });
};
