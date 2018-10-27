const {generateRectangle} = require ('./src/patternsLibrary.js');
const {extractParameters} = require ('./src/patternsUtil.js');

const main = function () {
  console.log(generateRectangle(extractParameters(process.argv)));
}

main();
