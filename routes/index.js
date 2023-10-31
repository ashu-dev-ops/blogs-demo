const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  const data = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5"
  );
  console.log(data.data);
  res.render("index", { data: data.data });
});
router.get("/blog/:id", async (req, res) => {
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${req.params.id}`
  );
  console.log(data.data);
  res.render("blog", { data: data.data });
});
module.exports = router;
