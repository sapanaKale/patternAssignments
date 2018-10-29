const {generateRectangle} = require ('./src/patternsLibrary.js');
const {extractParameters,convertToString} = require ('./src/patternsUtil.js');

const main = function () {
  console.log(convertToString(generateRectangle(extractParameters(process.argv))));
}

main();
