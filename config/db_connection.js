"use strict";
import mongoose from "mongoose";

const Connect = () => {
  mongoose
    .connect(process.env.DB, {
      dbName: "users",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB connection error:", err));
};

export default Connect;
