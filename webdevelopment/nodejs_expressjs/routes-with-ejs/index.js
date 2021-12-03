const express = require("express");
const app = express();
const port = 3000;

const profilesRoutes = require("./src/routes/profilesRouter.js");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "public/views");

app.get("/", (req, res) => {
  res.render("./home.ejs");
});

app.use("/profiles", profilesRoutes);

app.get("/addprofile", (req, res) => {
  res.render("./addprofilepage.ejs");
});

app.use((req, res) => {
  res.send("Not a web route on this domain: 404");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
