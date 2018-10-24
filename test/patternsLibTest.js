const assert = require ('assert');
const {generateRectangle,generateTriangle,generateDiamond} = require ('../src/patternsLibrary.js');
const {logTestCase, getSerialNumber, increaseSerialNumber} = require ('./frameworkForTestfile.js');

const testGenerateRectangle = function (type,length,breadth,expectedOutput) {
  let args = type+"_"+length+"_"+breadth;
  let pattern = "rectangle";
  let number = getSerialNumber();
  let actualOutput = generateRectangle(type,length,breadth);
  logTestCase(number,pattern,args,expectedOutput,actualOutput);
  assert.deepEqual(actualOutput,expectedOutput);
  increaseSerialNumber();
}

let filled_10_7 = '**********\n**********\n**********\n**********\n**********\n**********\n**********';
testGenerateRectangle("filled",10,7,filled_10_7);
let filled_1_2 = '*\n*';
testGenerateRectangle("filled",1,2,filled_1_2);
let filled_2_2 = '**\n**';
testGenerateRectangle("filled",2,2,filled_2_2);
let empty_10_7 = '**********\n*        *\n*        *\n*        *\n*        *\n*        *\n**********';
testGenerateRectangle("empty",10,7,empty_10_7);
let empty_1_2 = '*\n*'
testGenerateRectangle("empty",1,2,empty_1_2);
let empty_2_2 = '**\n**'
testGenerateRectangle("empty",2,2,empty_2_2);
let alternating_10_7 = '##########\n**********\n##########\n**********\n##########\n**********\n##########';
testGenerateRectangle("alternating",10,7,alternating_10_7);
let alternating_1_2 = '#\n*';
testGenerateRectangle("alternating",1,2,alternating_1_2);
let alternating_2_2 = '##\n**';
testGenerateRectangle("alternating",2,2,alternating_2_2);

const testGenerateTriangle = function (type,height,expectedOutput) {
  let number = getSerialNumber();
  let pattern = "triangle";
  let args = type+'_'+height;
  let actualOutput = generateTriangle(type,height);
  logTestCase(number,pattern,args,actualOutput,expectedOutput);
  assert.deepEqual(actualOutput,expectedOutput);
  increaseSerialNumber();
}

let left_2 = '*\n**';
testGenerateTriangle("left",2,left_2);
let left_3 = '*\n**\n***';
testGenerateTriangle("left",3,left_3);
let right_2 = ' *\n**';
testGenerateTriangle("right",2,right_2);
let right_3 = '  *\n **\n***';
testGenerateTriangle("right",3,right_3);


const testGenerateDiamond= function (type,height,expectedOutput) {
  let number = getSerialNumber();
  let pattern = "diamond";
  let args = type+'_'+height;
  let actualOutput = generateDiamond(type,height);
  logTestCase(number,pattern,args,expectedOutput,actualOutput);
  assert.deepEqual(actualOutput,expectedOutput);
  increaseSerialNumber();
}

let filled_2 = ' * \n***\n * ';
testGenerateDiamond("filled",2,filled_2);
let filled_3 = ' * \n***\n * ';
testGenerateDiamond("filled",3,filled_3);
let filled_4 = '  *  \n *** \n*****\n *** \n  *  ';
testGenerateDiamond("filled",4,filled_4);
let hollow_2 = ' * \n* *\n * ';
testGenerateDiamond("hollow",2,hollow_2);
let hollow_3 = ' * \n* *\n * ';
testGenerateDiamond("hollow",3,hollow_3);
let hollow_4 = '  *  \n * * \n*   *\n * * \n  *  ';
testGenerateDiamond("hollow",4,hollow_4);
let angled_2 = ' * \n* *\n * ';
testGenerateDiamond("angled",2,angled_2);
let angled_3 = ' * \n* *\n * ';
testGenerateDiamond("angled",3,angled_3);
let angled_4 = '  *  \n / \\ \n*   *\n \\ / \n  *  ';
testGenerateDiamond("angled",4,angled_4);
