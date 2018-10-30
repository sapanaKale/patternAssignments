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

const zip = function (object, element) {
  object.value[object.index] = [element,object.array[object.index]];
  object.index++;
  return object;
}

const compareArrayLength = function (source1, source2) {
  let result = { smaller:source1, greater:source2};
  if (source2.length < source1.length) {
    result.smaller = source2;
    result.greater = source1;
  }
  return result;
}

const zipArray = function (source1,source2) {
  let smallerArray = compareArrayLength(source1,source2).smaller;
  let greaterArray = compareArrayLength(source1,source2).greater;
  return greaterArray.reduce(zip,{index:0,value:[],array:smallerArray}).value;
}

const justifyOutput = function (actualOutput,expectedOutput) {
  for (let index=0; index<expectedOutput.length; index++) {expectedOutput[index] = justify(expectedOutput[index],30); }
  for (let index=0; index<actualOutput.length; index++) {actualOutput[index] = justify(actualOutput[index],30)}
  let outputArray = zipArray(actualOutput,expectedOutput);
  let output = outputArray[0].join(" | ") + " |";
  let delimiter = repeatCharacter(" ",51);
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
  console.log(repeatCharacter("-",116));
}


exports.getSerialNumber = getSerialNumber;
exports.increaseSerialNumber = increaseSerialNumber;
exports.logTestCase = logTestCase;
exports.zipArray = zipArray;
