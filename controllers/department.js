const Department = require("../models/department");

exports.addDepartment = async (req, res, next) => {
  const { id, name, code } = req.body;
  const idExist = await Department.findOne({ id });
  if (idExist) {
    return res.status(400).json({
      success: false,
      message: "Department already exists",
    });
  }
  try {
    const department = await Department.create({ ...req.body });
    res.status(200).json({
      success: true,
      department,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getDepartment = async (req, res, next) => {
  Department.find()
    .then((result) => {
      res.status(200).json({
        Department: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error: err,
      });
    });
};
