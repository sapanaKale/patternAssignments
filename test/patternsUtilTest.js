const assert = require ('assert');
const { repeatString, alignRight, alignCentre, generateLine, extractParameters } = require ('../src/patternsUtil.js');

const testRepeatString = function (character, times, expectedOutput) {
  let actualOutput = repeatString(character, times);
  assert.deepEqual(actualOutput,expectedOutput);
}

testRepeatString("*",1,'*');
testRepeatString("*",3,'***');
testRepeatString("*",6,'******');

const testAlignRight = function (length, text, expectedOutput) {
  let actualOutput = alignRight(length, text);
  assert.deepEqual(actualOutput,expectedOutput);
}

testAlignRight(2,'*',' *')
testAlignRight(5,'**','   **')

const testAlignCentre = function (text, length, expectedOutput) {
  let actualOutput = alignCentre(text, length);
  assert.deepEqual(actualOutput,expectedOutput);
}

testAlignCentre('*',3,' * ');
testAlignCentre('**',4,' ** ');
testAlignCentre('***',7,'  ***  ');

const testGenerateLine = function (length, leftChar, middleChar, rightChar, expectedOutput) {
  let actualOutput = generateLine(length, leftChar, middleChar, rightChar);
  assert.deepEqual(actualOutput,expectedOutput);
}

testGenerateLine(1,'*','#','*','*');
testGenerateLine(2,'*','#','*','**');
testGenerateLine(3,'*','#','*','*#*');
testGenerateLine(5,'*','*','*','*****');
testGenerateLine(4,'*',' ','*','*  *')

const testExtractParameters = function (userArgs, expectedOutput) {
  let actualOutput = extractParameters(userArgs);
  assert.deepEqual(actualOutput,expectedOutput);
}

let userArgs = [1,2,3,4,5,6,7];
testExtractParameters(userArgs,{'type':3,'length':4,'height':4,'breadth':5});

userArgs[2] = 'filled';
userArgs[3] = 1;
userArgs[4] = 5;
testExtractParameters(userArgs,{'type':'filled','length':1,'height':1,'breadth':5});

userArgs[2] = 'left';
userArgs[3] = '3';
userArgs[4] = '4';
testExtractParameters(userArgs,{'type':'left','length':3,'height':3,'breadth':4});

console.log('all tests are passed');
