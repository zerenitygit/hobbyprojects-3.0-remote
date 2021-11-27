var counter = function (arr) {
  return `there are ${arr.length} numbers of elements in parameter array`;
};

var adder = function (a, b) {
  return a + b;
};

var subtracter = function (a, b) {
  return a - b;
};

module.exports.divider = function (a, b) {
  return a / b;
};

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.subtracter = subtracter;

/* module.exports = { divider: divider, subtracter: subtracter } */
