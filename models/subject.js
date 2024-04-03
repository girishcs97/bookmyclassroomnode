const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      maxlength: 32,
    },
    code: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("subject", subjectSchema);
