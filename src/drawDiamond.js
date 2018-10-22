const library = require ('./patternsLibrary.js');
const generateDiamond = library.generateDiamond;

const main = function () {
  let typeOfDiamond = process.argv[2];
  let heightOfDiamond = +process.argv[3];
  console.log(generateDiamond(typeOfDiamond, heightOfDiamond));
}

main();
