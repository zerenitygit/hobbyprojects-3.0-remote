const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const publicpath = path.join(__dirname + "/public");

app.use(express.static("public"));

var profiles = [
  {
    id: 1,
    profpic: "/pers1.jpg",
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
    profpic: "/pers2.jpg",
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
    profpic: "/pers3.jpg",
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
];

app.get("/", (req, res) => {
  res.render("./home.ejs");
});

app.get("/profiles", (req, res) => {
  res.render("./profiles.ejs", { profiles: profiles });
});

app.get("/profiles/:id", (req, res) => {
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

app.get("/addprofilepage", (req, res) => {
  res.render("./addprofilepage.ejs");
});

app.post("/profiles", (req, res) => {
  var addedPerson = req.body;
  var addedPersonWithID = { id: profiles.length + 1, ...addedPerson };
  addedPersonWithID.hobbies = addedPersonWithID.hobbies.replace("and", ",");
  addedPersonWithID.hobbies = addedPersonWithID.hobbies.replace(".", "");

  addedPersonWithID.hobbies = addedPersonWithID.hobbies.replace(" ,", ",");
  addedPersonWithID.hobbies = addedPersonWithID.hobbies.split(",");

  profiles.push(addedPersonWithID);

  res.redirect("/profiles");
});

app.listen(3000, () => console.log("Listening on port 3000..."));
