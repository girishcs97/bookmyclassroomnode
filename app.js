const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const userRoutes = require("./route/user");
const subjectRoutes = require("./route/subject");
const deapartmentRoutes = require("./route/department");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", userRoutes);
app.use("/subject", subjectRoutes);
app.use("/department", deapartmentRoutes);


const port = process.env.PORT || 8000;
console.log("err", process.env.DATABASE);
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
