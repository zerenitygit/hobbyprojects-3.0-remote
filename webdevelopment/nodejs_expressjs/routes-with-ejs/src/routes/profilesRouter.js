import express from "express";
import path from "path";
import multer from "multer";
import fetch from "node-fetch";
import profiles from "../../profiles.js";

const router = express.Router();

const profiles_api_url = "http://localhost:3000/profiles/api";

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

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

router.get("/api", (req, res) => {
  res.json(profiles);
});

router.get("/api/:id", (req, res) => {
  fetch(profiles_api_url, { method: "GET" }).then((response) => {
    response.json().then((response) => {
      let users = [];

      users = response;

      let profile = users.find((profile) => profile.id == req.params.id);
      res.json(profile);
    });
  });
});

router.post("/api", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("./addprofilepage.ejs", {
        msg: err,
      });
    } else {
      let newProfile = req.body;
      newProfile.profpic = req.file.filename;

      //make number checker in ejs file

      //these particular name check declerations are for demonstrational purposes only as evidently people can in fact be called for instance X Æ A-12

      newProfile.firstname = newProfile.firstname
        .replace(/[^\w]+|_/g, "")
        .trim();

      newProfile.lastname = newProfile.lastname.replace(/[^\w]+|_/g, "").trim();

      newProfile.age = newProfile.age.replace(/[^\d]+/g, "").trim();

      newProfile.role = newProfile.role.replace(/[^\w]+|_/g, " ").trim();

      newProfile.jobinfo = newProfile.jobinfo.replace(/[^\w]+|_/g, " ").trim();

      newProfile.educationalbg = newProfile.educationalbg
        .replace(/[^\w]+|_/g, " ")
        .trim();

      newProfile.hobbies = newProfile.hobbies
        .replace(/[^\w|\s|,|]|_/g, "")
        .trim();

      newProfile.hobbies = newProfile.hobbies.replace(/\s+/g, " ");

      newProfile.hobbies = newProfile.hobbies.replace("and", ",");

      newProfile.hobbies = newProfile.hobbies.replace(/\s,/g, ",");

      newProfile.hobbies = newProfile.hobbies.replace(/,\s/g, ",");

      newProfile.hobbies = newProfile.hobbies.split(",");
      console.log(newProfile.hobbies);

      newProfile.hobbies.forEach((item, index) => {
        newProfile.hobbies[index] =
          item.charAt(0).toUpperCase() + item.substring(1, item.length);
      });

      newProfile.favoritequote = newProfile.favoritequote
        .replace(/[^\w]+|_/g, " ")
        .trim();

      newProfile = { id: profiles.length + 1, ...newProfile };

      profiles.push(newProfile);
      res.redirect("/");
    }
  });
});

router.get("/", (req, res) => {
  fetch(profiles_api_url, { method: "GET" }).then((response) => {
    response.json().then((response) => {
      console.log(response);
      let data = response;
      res.render("profiles.ejs", { profiles: data });
    });
  });
});

router.get("/:id", (req, res) => {
  const profile_id_api_url = `http://localhost:3000/profiles/api/${req.params.id}`;

  fetch(profile_id_api_url, { method: "GET" }).then((response) => {
    response.json().then((response) => {
      let profile = {};

      profile = response;

      var profileID = profile["id"];

      var nextperson;

      if (profileID == profiles.length) {
        nextperson = profiles[0];
      } else {
        nextperson = profiles.find((profile) => profile.id == profileID + 1);
      }

      res.render("./profile.ejs", {
        profile: profile,
        nextperson: nextperson,
      });
    });
  });
});
///
export default router;
