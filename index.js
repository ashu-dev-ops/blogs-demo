require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes/index");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);
// const PORT = 4000;
const path = require("path");
const mongoose = require("mongoose");
// const fileUpload = require("express-fileupload");
// view engine setup
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");
// app.use(fileUpload());
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("*/images", express.static("public/images"));
app.use("/", indexRouter);
app.listen(PORT, async () => {
//   await mongoose.connect(process.env.MONGO_URI, {
//     autoIndex: true,
//   });
  console.log(`Server listening on port ${PORT}`);
});
