const {generatePattern} = require ('./src/patternsLibrary.js');
const {extractMultipleParameters, convertToString} = require ('./src/patternsUtil.js');

const main = function () {
  console.log(convertToString(generatePattern(extractMultipleParameters(process.argv.slice(2)))));
}

main();
