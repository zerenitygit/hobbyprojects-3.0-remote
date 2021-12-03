const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");

let profiles;
fs.readFile("./data.json", "utf-8", (err, data) => {
  if (err) throw err;
  profiles = JSON.parse(data);
});

const storage = multer.diskStorage({
  destination: "public/img",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("profpic");

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  const mimetype = filetypes.test(file.mimetype);

  console.log(extname);
  console.log(mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

router.get("/", (req, res) => {
  res.render("./profiles.ejs", { profiles: profiles });
});

router.get("/:id", (req, res) => {
  var profile = profiles.find((profile) => profile.id == req.params.id);
  var profileID = profile.id;
  var nextperson;
  if (profile.id == profiles.length) {
    nextperson = profiles[0];
  } else {
    nextperson = profiles.find((profile) => profile.id == profileID + 1);
  }
  res.render("./profile.ejs", {
    profile: profile,
    nextperson: nextperson,
  });
});

router.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("./addprofilepage.ejs", {
        msg: err,
      });
    } else {
      var addedPerson = req.body;
      addedPerson.profpic = req.file.filename;

      addedPerson.hobbies = addedPerson.hobbies.replace("and", ",");
      addedPerson.hobbies = addedPerson.hobbies.replace(".", "");
      addedPerson.hobbies = addedPerson.hobbies.replace(" ,", ",");

      addedPerson.favoritequote = addedPerson.hobbies.replace('"', "");

      addedPerson.hobbies = [addedPerson.hobbies];

      var addedPersonhHobbies = addedPerson.hobbies;

      console.log(addedPersonhHobbies);

      var addedPersonWithID = { id: profiles.length + 1, ...addedPerson };
      console.log(addedPersonWithID);

      profiles.push(addedPersonWithID);
      res.redirect("/profiles");
    }
  });
});

module.exports = router;
