const library = require ('./patternsLibrary.js');
const generateTriangle = library.generateTriangle;

const main = function () {
  let typeOfTriangle = process.argv[2];
  let heightOfTriangle = process.argv[3];
  console.log(generateTriangle(typeOfTriangle, heightOfTriangle));
}

main();
