const assert = require ('assert');
const {generateRectangle,generateTriangle,generateDiamond} = require ('../src/patternsLibrary.js');
const {logTestCase, getSerialNumber, increaseSerialNumber} = require ('./frameworkForTestfile.js');

const testGenerateRectangle = function (parameters,expectedOutput) {
  //let args = parameters.type+"_"+parameters.length+"_"+parameters.breadth;
  //let pattern = "rectangle";
  //let number = getSerialNumber();
  let actualOutput = generateRectangle(parameters);
  //increaseSerialNumber();
  //logTestCase(number,pattern,args,expectedOutput,actualOutput);
  assert.deepEqual(actualOutput,expectedOutput);
  //increaseSerialNumber();
}

let filled_10_7 = '**********\n**********\n**********\n**********\n**********\n**********\n**********';
testGenerateRectangle({'type':"filled",'length':10,'breadth':7},filled_10_7);
let filled_1_2 = '*\n*';
testGenerateRectangle({'type':"filled",'length':1,'breadth':2},filled_1_2);
let filled_2_2 = '**\n**';
testGenerateRectangle({'type':"filled",'length':2,'breadth':2},filled_2_2);
let empty_10_7 = '**********\n*        *\n*        *\n*        *\n*        *\n*        *\n**********';
testGenerateRectangle({'type':"empty",'length':10,'breadth':7},empty_10_7);
let empty_1_2 = '*\n*'
testGenerateRectangle({'type':"empty",'length':1,'breadth':2},empty_1_2);
let empty_2_2 = '**\n**'
testGenerateRectangle({'type':"empty",'length':2,'breadth':2},empty_2_2);
let alternating_10_7 = '##########\n**********\n##########\n**********\n##########\n**********\n##########';
testGenerateRectangle({'type':"alternating",'length':10,'breadth':7},alternating_10_7);
let alternating_1_2 = '#\n*';
testGenerateRectangle({'type':"alternating",'length':1,'breadth':2},alternating_1_2);
let alternating_2_2 = '##\n**';
testGenerateRectangle({'type':"alternating",'length':2,'breadth':2},alternating_2_2);

const testGenerateTriangle = function (parameters,expectedOutput) {
  //let number = getSerialNumber();
  //let pattern = "triangle";
  //let args = parameters.type+'_'+parameters.height;
  let actualOutput = generateTriangle(parameters);
  //logTestCase(number,pattern,args,actualOutput,expectedOutput);
  assert.deepEqual(actualOutput,expectedOutput);
  //increaseSerialNumber();
}

let left_2 = '* \n**';
testGenerateTriangle({'type':"left",'height':2},left_2);
let left_3 = '*  \n** \n***';
testGenerateTriangle({'type':"left",'height':3},left_3);
let right_2 = ' *\n**';
testGenerateTriangle({'type':"right",'height':2},right_2);
let right_3 = '  *\n **\n***';
testGenerateTriangle({'type':"right",'height':3},right_3);


const testGenerateDiamond= function (parameters,expectedOutput) {
  //let number = getSerialNumber();
  //let pattern = "diamond";
  //let args = parameters.type+'_'+parameters.height;
  let actualOutput = generateDiamond(parameters);
  //logTestCase(number,pattern,args,expectedOutput,actualOutput);
  assert.deepEqual(actualOutput,expectedOutput);
  //increaseSerialNumber();
}

let filled_2 = ' * \n***\n * ';
testGenerateDiamond({'type':"filled",'height':2},filled_2);
let filled_3 = ' * \n***\n * ';
testGenerateDiamond({'type':"filled",'height':3},filled_3);
let filled_4 = '  *  \n *** \n*****\n *** \n  *  ';
testGenerateDiamond({'type':"filled",'height':4},filled_4);
let hollow_2 = ' * \n* *\n * ';
testGenerateDiamond({'type':"hollow",'height':2},hollow_2);
let hollow_3 = ' * \n* *\n * ';
testGenerateDiamond({'type':"hollow",'height':3},hollow_3);
let hollow_4 = '  *  \n * * \n*   *\n * * \n  *  ';
testGenerateDiamond({'type':"hollow",'height':4},hollow_4);
let angled_2 = ' * \n* *\n * ';
testGenerateDiamond({'type':"angled",'height':2},angled_2);
let angled_3 = ' * \n* *\n * ';
testGenerateDiamond({'type':"angled",'height':3},angled_3);
let angled_4 = '  *  \n / \\ \n*   *\n \\ / \n  *  ';
testGenerateDiamond({'type':"angled",'height':4},angled_4);

console.log('all tests are passed');
