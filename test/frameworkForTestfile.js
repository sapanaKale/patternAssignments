const {zipArray} = require('../../arrayPractice/functionsLibrary');

const {repeatString} = require ('../src/patternsLibrary.js');

let serialNumber = 1;

const getSerialNumber = function () {
  return serialNumber;
}

const increaseSerialNumber = function () {
  return serialNumber++;
}

const repeatCharacter = function (character,times) {
 let result = new Array(times).fill(character);
  return result.join("");
}

const justify = function (text,length) {
  let numberOfSpaces = length - text.toString().length;
  let justifiedText = text + repeatCharacter(' ',numberOfSpaces);
  return justifiedText;
}

const justifyOutput = function (actualOutput,expectedOutput) {
  let expected = expectedOutput.split("\n");
  for (let index=0; index<expected.length; index++) {expected[index] = justify(expected[index],30); }
  let actual = actualOutput.split("\n");
  for (let index=0; index<actual.length; index++) {actual[index] = justify(actual[index],30)}
  let outputArray = zipArray(actual,expected);
  let output = outputArray[0].join(" | ") + " |";
  let delimiter = repeatString(" ",51);
  for (let index=1; index<outputArray.length; index++) { output = output + "\n" + delimiter + outputArray[index].join("   ") };
  return output;
}

const logTestCase = function (number,pattern,args,actualOutput,expectedOutput) {
  let message = [];
  let output = justifyOutput(actualOutput,expectedOutput);
  message.push(justify(number,3) + "| ");
  message.push(justify(pattern,15) + "| ");
  message.push(justify(args,25) + "| ");
  console.log(message.join(' ') + output);
  console.log(repeatString("-",116));
}


exports.getSerialNumber = getSerialNumber;
exports.increaseSerialNumber = increaseSerialNumber;
exports.logTestCase = logTestCase;

