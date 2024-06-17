const { exceptionHandler, Error404 } = require("../utils/errors");
const { Category } = require("./models");

const categoryControllerList = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoryControllerCreate = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoryControllerDetail = async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id });
    if (!category) {
      throw new Error404();
    }
    res.status(200).json(category);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoryControllerUpdate = async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!category) {
      throw new Error404();
    }
    res.status(200).json(category);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoryControllerDelete = async (req, res) => {
  try {
    const category = await Category.findOneAndDelete({ _id: req.params.id });
    if (!category) {
      throw new Error404();
    }
    res.status(204).json(null);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

module.exports = {
  categoryControllerList,
  categoryControllerCreate,
  categoryControllerDetail,
  categoryControllerUpdate,
  categoryControllerDelete,
};
