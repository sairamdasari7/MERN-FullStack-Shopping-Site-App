const Category = require("../models/Category");
const path = require("path");
const fs = require("fs");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err.message });
  }
};

exports.addCategory = async (req, res) => {
  const { name, itemCount } = req.body;
  const imagePath = req.file ? req.file.path : "";
  
  if (!name || !itemCount || !imagePath) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newCategory = new Category({
      name,
      itemCount: parseInt(itemCount),
      image: imagePath,
    });

    await newCategory.save();
    res.status(201).json({ message: "Category added", category: newCategory });
  } catch (err) {
    res.status(500).json({ message: "Error adding category", error: err.message });
  }
};
