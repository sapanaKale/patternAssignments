const { generateDiamond } = require ('./src/patternsLibrary.js');
const { extractParameters } = require ('./src/patternsUtil.js');

const main = function () {
  console.log(generateDiamond(extractParameters(process.argv)));
}

main();
