const assert = require ('assert');
const { repeatString, alignLeft, alignRight, alignCentre, generateLine, convertToString, extractParameters } = require ('../src/patternsUtil.js');

const testRepeatString = function (character, times, expectedOutput) {
  let actualOutput = repeatString(character, times);
  assert.deepEqual(actualOutput,expectedOutput);
}

testRepeatString("*",1,'*');
testRepeatString("*",3,'***');
testRepeatString("*",6,'******');

const testAlignLeft = function (length, text, expectedOutput) {
  let actualOutput = alignLeft(text,length);
  assert.deepEqual(actualOutput,expectedOutput);
}

testAlignLeft("*",1,"*");
testAlignLeft("*",2,"* ");
testAlignLeft("**",4,"**  ");

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

testExtractParameters([1,2,3,4,5,6],{'type':3,'length':4,'height':4,'breadth':5});
testExtractParameters([,,"filled",1,5,],{'type':'filled','length':1,'height':1,'breadth':5});
testExtractParameters([,,"left",'3','4',,],{'type':'left','length':3,'height':3,'breadth':4});

const testConvertToString = function (array,expectedOutput) {
  let actualOutput = convertToString(array);
  assert.deepEqual(actualOutput,expectedOutput);
}

testConvertToString(['*','*','*'],"*\n*\n*");
testConvertToString(['* ','**'],"* \n**");
testConvertToString(['* *','* *'],"* *\n* *");

console.log('all tests are passed');
