const express = require("express");
const router = express.Router();
const { addDepartment, getDepartment } = require("../controllers/department");

router.post("/addDepartment", addDepartment);
router.get("/getDepartment", getDepartment);

module.exports = router;
