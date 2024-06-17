const mongoose = require("mongoose");

const categoryObject = {
  name: { type: String, required: true },
  description: { type: String },
};

const categorySchema = new mongoose.Schema(categoryObject, {
  versionKey: false,
  timestamps: true,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = {
  Category,
  categoryObject,
  categorySchema,
};
