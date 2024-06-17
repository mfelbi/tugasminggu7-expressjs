const { body } = require("express-validator");

const categoryValidationCreate = [
  body("name").exists().withMessage("Name is required"),
  body("description").exists().withMessage("Description is required"),
];

const categoryValidationUpdate = [
  body("name").optional().exists().withMessage("Name is required"),
  body("description").optional().exists().withMessage("Description is required"),
];

module.exports = {
  categoryValidationCreate,
  categoryValidationUpdate,
};
