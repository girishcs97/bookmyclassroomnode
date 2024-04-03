const Subject = require("../models/subject");

exports.addSubject = async (req, res, next) => {
  const { id, name, code } = req.body;
  const idExist = await Subject.findOne({ id });
  if (idExist) {
    return res.status(400).json({
      success: false,
      message: "Course already exists",
    });
  }
  try {
    const subject = await Subject.create({ ...req.body });
    res.status(200).json({
      success: true,
      subject,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSubject = async (req, res, next) => {
  Subject.find()
    .then((result) => {
      res.status(200).json({
        Subject: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error: err,
      });
    });
};

