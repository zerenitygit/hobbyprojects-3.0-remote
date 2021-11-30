const express = require("express");
const app = express();

var profiles = [
  {
    id: 1,
    profpic:
      "https://36z59wriv543qd814533ma8z-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/303_Berggruen_Institute-Nils_Gilmani-e1542734040382-400x400.jpg",
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
    profpic:
      "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2018/12/Nikki-Krishnamurthy-400x400.jpg",
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
    profpic:
      "https://www.sasaki.com/wp-content/uploads/2019/10/Master_CBraga-1-400x400.jpg",
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
  {
    id: 4,
    profpic:
      "https://www.blinkfilmsuk.com/wp-content/uploads/2018/05/Dan-edit-square-400x400.jpg",
    firstname: "Francis",
    lastname: "Pelegrone",
    age: "46",
    role: "Devops Technician",
    hobbies: ["Martial Arts", "Watching Movies"],
    favoritequote: "lkhoro wiwi ccsj feoofdk fkwo",
    jobinfo:
      "lfwplfp oweporpewi eworopewkok pok ok opm m m m,qpoweqpw pqwekowepoqwk poekwopdk omwdpqmw pdqwmdpm powmdpoqwmdpmc pcmqwpodmowqmrpfmp ",
    educationalbg:
      "qoieiititmvkmvkm kmviemwp mvpwmepmvm  pvome  pveofmpewrewp jrpejwrp jprqrq råq åorroj pojr m pm p m poerm qå å qmåorqr morm pmrqwmpwrmqpwrm pwrmpqwmpop",
  },
];

app.set("view engine", "ejs");

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

app.listen(3000, () => console.log("Listening on port 3000..."));
