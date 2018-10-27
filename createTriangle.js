const { generateTriangle } = require ('./src/patternsLibrary.js');
const { extractParameters } = require ('./src/patternsUtil.js');

const main = function () {
  console.log(generateTriangle(extractParameters(process.argv)));
}

main();
