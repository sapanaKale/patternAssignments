const library = require ('./patternsLibrary.js');
const generateRectangle = library.generateRectangle;

const main = function () {
  let type = process.argv[2];
  let length = process.argv[3];
  let breadth = process.argv[4];
  console.log(generateRectangle(type, length, breadth));
}

main();
