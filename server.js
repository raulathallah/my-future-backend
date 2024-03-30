const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM SERVER!");
});
app.listen(5000, () => {
  console.log("API is running on port 3000");
});
