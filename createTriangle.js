const { generateTriangle } = require ('./src/patternsLibrary.js');
const { extractParameters, convertToString } = require ('./src/patternsUtil.js');

const main = function () {
  console.log(convertToString(generateTriangle(extractParameters(process.argv.slice(2)))));
}

main();
