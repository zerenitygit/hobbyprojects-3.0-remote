const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/hello.html");
});

app.get("/home/users/:id", function (req, res) {
  res.send(`you requested id ${req.params.id}`);
});

app.get("/home/place/:name", function (req, res) {
  res.send(`you requested name ${req.params.name}`);
});

app.listen(3000, () => console.log(`listening at port 3000...`));
