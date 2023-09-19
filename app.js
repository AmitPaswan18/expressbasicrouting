const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

// use / to go to main section
app.get("/", (req, res) => {
  res.send("Welcome to My Express App");
});

// use /about to go to about section
app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

// use /contact.html to go to about section

app.get("/contact.html", (req, res) => {
  res.send();
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
