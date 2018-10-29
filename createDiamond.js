const { generateDiamond } = require ('./src/patternsLibrary.js');
const { extractParameters, convertToString } = require ('./src/patternsUtil.js');

const main = function () {
  console.log(convertToString(generateDiamond(extractParameters(process.argv))));
}

main();
