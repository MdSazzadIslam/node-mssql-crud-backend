"use strict";

const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");
//const verifyToken = require("../middleware/verifyToken");

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post("/create", categoryController.createCategory);
router.delete("/delete", categoryController.deleteCategory);
router.put("/update", categoryController.updateCategory);
module.exports = router;
