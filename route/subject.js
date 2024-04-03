const express = require("express");
const router = express.Router();
const { addSubject, getSubject } = require("../controllers/subject");

router.post("/addSubject", addSubject);
router.get("/getSubject", getSubject);

module.exports = router;
