const express = require("express");
const router = express.Router();
const multer = require("multer");
const { getCategories, addCategory } = require("../controllers/categoryController");
const auth = require("../middleware/authMiddleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    cb(null, `${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage });

// Routes
router.get("/", auth, getCategories);
router.post("/", auth, upload.single("image"), addCategory);

module.exports = router;
