/*fs.readFile("./data.json", "utf-8", (err, data) => {
  if (err) throw err;
  profiles = JSON.parse(data);
  console.log("ive been rendered");
});*/

import express from "express";
import path from "path";
import multer from "multer";
import fetch from "node-fetch";

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

router.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      profpic: "pers1.jpg",
      firstname: "Martin",
      lastname: "Pelvis",
      age: "43",
      role: "Senior TechLead",
      hobbies: ["Clubbing", "Playing Football", "Tea Tasting"],
      favoritequote: "ifjeiwfj fiewjfijewf fepwfjewjf fjewifjeiwjf feijwfijewf",
      jobinfo:
        "orgkorkgorkgokrogkrokg kgorkgokrgokrgk orgkorkgorkgokrogkrokg kgorkgokrgokrgk orgkorkgorkgokrogkrokg kgorkgokrgokrgk orgkorkgorkgokrogkrokg kgorkgokrgokrgk orgkorkgorkgokrogkrokg kgorkgokrgokrgk",
      educationalbg:
        "ifjiwejfoije vjef,pofkewpofk fopekfpoewkf fpoewkfpoewkfpkef ifjiwejfoije vjef,pofkewpofk fopekfpoewkf fpoewkfpoewkfpkef ifjiwejfoije vjef,pofkewpofk fopekfpoewkf fpoewkfpoewkfpkef  ifjiwejfoije vjef,pofkewpofk fopekfpoewkf fpoewkfpoewkfpkef ifjiwejfoije vjef,pofkewpofk fopekfpoewkf fpoewkfpoewkfpkef ifjiwejfoije vjef,pofkewpofk fopekfpoewkf fpoewkfpoewkfpkef ",
    },
    {
      id: 2,
      profpic: "pers2.jpg",
      firstname: "Selena",
      lastname: "Franken",
      age: "25",
      role: "Junior Front-End Developer",
      hobbies: ["Walking Dogs", "Yoga", "Reading Books", "Drinking Soda"],
      favoritequote: "dqwldqåwldå pqodpwqo lcpwqlkc wpelwpe",
      jobinfo:
        "iejrriepwfewofkoewfk fkwpefkwpekfopewk fkpewofpkewpofk pfoekwfkpk vqiwejwiqej ijqwiejiojwe mfoeinfin fweofnoiwenf nofwenfonwefon oewnfonwefin",
      educationalbg:
        "nxbxiwbxwvqwxvwqvuwqvsuqw ndwiqndiwqb diuwbduvwuquv cuvucyvqcv ciuqbwciqbwc nocnwocnqwoqnc cpqwmpdmwqpomw cmnqwodmowmcqmdimqwdowmmdpqd mpdwmdqwmd pmqwpmd",
    },
    {
      id: 3,
      profpic: "pers3.jpg",
      firstname: "Hanna",
      lastname: "Montana",
      age: "26",
      role: "Server Technician",
      hobbies: [
        "Cooking Food",
        "Listening To Music",
        "Gossiping",
        "Getting Haircuts",
        "Doing Laundry",
      ],
      favoritequote: "iwdjiwqk zmdmwdm owodkwdok feiwjfi",
      jobinfo:
        "pokwfpok pkfpweokfpowek ofkpoekfoewwenfonepn pn pfwe pnfpwef  pweoff owefo wefpewpf pwfpewfpef pfoqpqff jqifiqp qpfdpoqfmcpm ",
      educationalbg:
        "diowqdjioq pqpqpqpqri iejroi joifjef nn jn onfoewnfo oqidqowdj pjwqpdjqw jpdqwjidj iwjd jqpdjiqwdjowjdo joidnwdnon doqwndoinwoiqdn ondoiqwndoiqnwdoqdwqondnqondonqd owqndqo idqwj owiqdjowij",
    },
  ]);
});
router.get("/", (req, res) => {
  fetch(profiles_api_url, { method: "GET" }).then((response) => {
    response.json().then((response) => {
      let profiles = response;
      res.render("profiles.ejs", { profiles: profiles });
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

      fetch(profiles_api_url, { method: "GET" }).then((response) =>
        response.json().then((response) => {
          let data = [];

          data = response;

          var nextperson;

          if (profileID == data.length) {
            nextperson = data[0];
          } else {
            nextperson = data.find((profile) => profile.id == profileID + 1);
          }

          // console.log(data);
          console.log(profile);
          console.log(nextperson);

          res.render("./profile.ejs", {
            profile: profile,
            nextperson: nextperson,
          });
        })
      );
    });
  });

  /*
  var nextperson;
  if (profile.id == profiles.length) {
    nextperson = profiles[0];
  } else {
    nextperson = profiles.find((profile) => profile.id == profileID + 1);
  }
  res.render("./profile.ejs", {
    profile: profile,
    nextperson: nextperson,
  });*/
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

export default router;