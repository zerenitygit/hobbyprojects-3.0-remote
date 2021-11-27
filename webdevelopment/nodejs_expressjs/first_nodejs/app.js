/*let time = 0;

var timer = setInterval(function () {
  time += 2;

  console.log(`the time is now ${time}`);

  if (time > 5) {
    clearInterval(timer);
  }
}, 3000); */

// console.log(__dirname);
// console.log(__filename);

// var animal = require("./stuff");

// console.log(animal(["adam", "tim", "merlin"]));

/*var stuff = require("./stuff");

console.log(stuff.adder(5, 6));
console.log(stuff.divider(5, 6));

var events = require("events");

var myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", function (msg) {
  console.log(msg);
});

myEmitter.emit("someEvent", "the event was emitted :)");*/

var http = require("http");
var fs = require("fs");

//var myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf-8");
//var myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt", "utf-8");

/*myReadStream.on("data", function (chunk) {
  console.log("new data recieved: ");
  myWriteStream.write(chunk);
});*/

//myReadStream.pipe(myWriteStream);

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/amazing.html", "utf-8");
  myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("now listening on port 3000");
