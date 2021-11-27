const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/myfirstwebsitehome.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/myfirstwebsitelogin.html");
});

app.get("/login/createaccount", (req, res) => {
  res.sendFile(__dirname + "/myfirstwebsitecreateaccount.html");
});

app.listen(3000);
