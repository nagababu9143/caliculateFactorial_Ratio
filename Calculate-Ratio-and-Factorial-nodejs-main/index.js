const ratio = require("../ratio/index");
const fact = require("../factorial/index");

const ratioFact = (n1, n2, n3) => {
  return {
    ratio: ratio(n1, n2),
    factorial: fact(n3),
  };
};

module.exports = ratioFact;
