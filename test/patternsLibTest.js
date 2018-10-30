const assert = require ('assert');
const {generateRectangle, generateTriangle, generateDiamond, generatePattern} = require ('../src/patternsLibrary.js');
const {logTestCase, getSerialNumber, increaseSerialNumber} = require ('./frameworkForTestfile.js');

const testGenerateRectangle = function (parameters,expectedOutput) {
  let args = parameters.type+"_"+parameters.length+"_"+parameters.breadth;
  let pattern = "rectangle";
  let number = getSerialNumber();
  let actualOutput = generateRectangle(parameters);
  logTestCase(number,pattern,args,expectedOutput,actualOutput);
  assert.deepEqual(actualOutput,expectedOutput);
  increaseSerialNumber();
}

let filled_10_7 = ['**********',
                   '**********',
                   '**********',
                   '**********',
                   '**********',
                   '**********',
                   '**********'];
testGenerateRectangle({'type':"filled",'length':10,'breadth':7},filled_10_7);
let filled_1_2 = ['*',
                  '*'];
testGenerateRectangle({'type':"filled",'length':1,'breadth':2},filled_1_2);
let filled_2_2 = ['**',
                  '**'];
testGenerateRectangle({'type':"filled",'length':2,'breadth':2},filled_2_2);
let empty_10_7 = ['**********',
                  '*        *',
                  '*        *',
                  '*        *',
                  '*        *',
                  '*        *',
                  '**********'];
testGenerateRectangle({'type':"empty",'length':10,'breadth':7},empty_10_7);
let empty_1_2 = ['*',
                 '*'];
testGenerateRectangle({'type':"empty",'length':1,'breadth':2},empty_1_2);
let empty_2_2 = ['**',
                 '**'];
testGenerateRectangle({'type':"empty",'length':2,'breadth':2},empty_2_2);
let alternating_10_7 = ['##########',
                        '**********',
                        '##########',
                        '**********',
                        '##########',
                        '**********',
                        '##########'];
testGenerateRectangle({'type':"alternating",'length':10,'breadth':7},alternating_10_7);
let alternating_1_2 = ['#',
                       '*'];
testGenerateRectangle({'type':"alternating",'length':1,'breadth':2},alternating_1_2);
let alternating_2_2 = ['##',
                       '**'];
testGenerateRectangle({'type':"alternating",'length':2,'breadth':2},alternating_2_2);

const testGenerateTriangle = function (parameters,expectedOutput) {
  let number = getSerialNumber();
  let pattern = "triangle";
  let args = parameters.type+'_'+parameters.height;
  let actualOutput = generateTriangle(parameters);
  logTestCase(number,pattern,args,actualOutput,expectedOutput);
  assert.deepEqual(actualOutput,expectedOutput);
  increaseSerialNumber();
}

let left_2 = ['* ',
              '**'];
testGenerateTriangle({'type':"left",'height':2},left_2);
let left_3 = ['*  ',
              '** ',
              '***'];
testGenerateTriangle({'type':"left",'height':3},left_3);
let right_2 = [' *',
               '**'];
testGenerateTriangle({'type':"right",'height':2},right_2);
let right_3 = ['  *',
               ' **',
               '***'];
testGenerateTriangle({'type':"right",'height':3},right_3);


const testGenerateDiamond= function (parameters,expectedOutput) {
  let number = getSerialNumber();
  let pattern = "diamond";
  let args = parameters.type+'_'+parameters.height;
  let actualOutput = generateDiamond(parameters);
  logTestCase(number,pattern,args,expectedOutput,actualOutput);
  assert.deepEqual(actualOutput,expectedOutput);
  increaseSerialNumber();
}

let filled_2 = [' * ',
                '***',
                ' * '];
testGenerateDiamond({'type':"filled",'height':2},filled_2);
let filled_3 = [' * ',
                '***',
                ' * '];
testGenerateDiamond({'type':"filled",'height':3},filled_3);
let filled_4 = ['  *  ',
                ' *** ',
                '*****',
                ' *** ',
                '  *  '];
testGenerateDiamond({'type':"filled",'height':4},filled_4);
let hollow_2 = [' * ',
                '* *',
                ' * '];
testGenerateDiamond({'type':"hollow",'height':2},hollow_2);
let hollow_3 = [' * ',
                '* *',
                ' * '];
testGenerateDiamond({'type':"hollow",'height':3},hollow_3);
let hollow_4 = ['  *  ',
                ' * * ',
                '*   *',
                ' * * ',
                '  *  '];
testGenerateDiamond({'type':"hollow",'height':4},hollow_4);
let angled_2 = [' * ',
                '* *',
                ' * '];
testGenerateDiamond({'type':"angled",'height':2},angled_2);
let angled_3 = [' * ',
                '* *',
                ' * '];
testGenerateDiamond({'type':"angled",'height':3},angled_3);
let angled_4 = ['  *  ',
                ' / \\ ',
                '*   *',
                ' \\ / ',
                '  *  '];
testGenerateDiamond({'type':"angled",'height':4},angled_4);

const testGeneratePattern = function (parameters,expectedOutput) {
  let number = getSerialNumber();
  let pattern = "mergedPattern";
  let args = "----"; 
  let actualOutput = generatePattern(parameters);
  logTestCase(number,pattern,args,expectedOutput,actualOutput);
  assert.deepEqual(actualOutput,expectedOutput);
  increaseSerialNumber();
}

let filled_rectangle_2_2 = ['**',
                            '**'];
testGeneratePattern(["normal",{'type':"filled_rectangle",'length':2,'breadth':2}],filled_rectangle_2_2)

let left_triangle_3 = ['*  ',
                       '** ',
                       '***'];
testGeneratePattern(["normal",{'type':"left_triangle","height":3}],left_triangle_3);

let filled_rectangle_2_2_left_triangle_2 = ['** * ',
                                            '** **'];
testGeneratePattern(["normal",{'type':'filled_rectangle','length':2,'breadth':2},{'type':'left_triangle','height':2}],filled_rectangle_2_2_left_triangle_2);

let empty_rectangle_3_4_right_triangle_4 = ['***    *',
                                            '* *   **',
                                            '* *  ***',
                                            '*** ****'];
testGeneratePattern(["normal",{'type':'empty_rectangle','length':3,'breadth':4},{'type':'right_triangle','height':4}],empty_rectangle_3_4_right_triangle_4);

let left_triangle_2_alternating_rectangle_3_2 = ['*  ###',
                                                 '** ***'];
testGeneratePattern(["normal",{'type':'left_triangle','height':2},{'type':'alternating_rectangle','length':3,'breadth':2}],left_triangle_2_alternating_rectangle_3_2);

let filled_diamond_5_left_triangle_5 = ['  *   *    ',
                                        ' ***  **   ',
                                        '***** ***  ',
                                        ' ***  **** ',
                                        '  *   *****'];
testGeneratePattern(["normal",{'type':'filled_diamond','height':5},{'type':'left_triangle','height':5}],filled_diamond_5_left_triangle_5);

let flip_left_triangle_3_right_triangle_3 = ['  * *  ',
                                             ' ** ** ',
                                             '*** ***'];
testGeneratePattern(["flip",{'type':'left_triangle','height':3},{'type':'right_triangle','height':3}],flip_left_triangle_3_right_triangle_3);

let mirror_left_triangle_4_right_triangle_4 = ['**** ****',
                                               '***   ***',
                                               '**     **',
                                               '*       *'];
testGeneratePattern(["mirror",{'type':'left_triangle','height':4},{'type':'right_triangle','height':4}],mirror_left_triangle_4_right_triangle_4);

console.log('all tests are passed');
