"use strict";
const categoryService = require("../services/categoryService");

exports.getAll = async (req, res) => {
  try {
    const result = await categoryService.getAll();
    res.json(result.recordsets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getById = async (req, res) => {
  try {
    console.log(req.params.id);
    const result = await categoryService.getById(req.params.id);
    res.json(result.recordsets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const result = await categoryService.createCategory(req.body);

    if (result) {
      res.status(201).json({
        message: "Inserted Successfully",
      });
    } else {
      return res.status(400).send({ message: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const result = await categoryService.deleteCategory(req.body);

    if (result) {
      res.status(201).json({
        message: "Deleted Successfully",
      });
    } else {
      return res.status(400).send({ message: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const result = await categoryService.updateCategory(req.body);

    if (result) {
      res.status(201).json({
        message: "Updated Successfully",
      });
    } else {
      return res.status(400).send({ message: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
