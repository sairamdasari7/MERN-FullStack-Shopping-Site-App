const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  itemCount: Number,
  image: String,
});

module.exports = mongoose.model("Category", categorySchema);
