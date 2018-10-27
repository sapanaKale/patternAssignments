const repeatString = function (string, numberOfTimes) {
  let result = "";
  for (let position=0; position<numberOfTimes; position++) {
    result += string;
  }
  return result;
}

const alignRight = function (length,string) {
  let  numberOfSpaces = length - string.length;
  let alignedString = repeatString(" ",numberOfSpaces) + string;
  return alignedString;
}

const alignLeft = function (length,string) {
  let numberOfSpaces = length - string.length;
  let alignedString = string + repeatString(" ",numberOfSpaces);
  return alignedString;
}

const alignCentre = function (text, length) {
  let numOfSpaces = (length - text.length)/2;
  let result = repeatString(" ", numOfSpaces);
  result = result + text + repeatString(" ", numOfSpaces);
  return result;
}

const generateLine = function (length, leftChar, middleChar, rightChar) {
  let leftBorder = 1 % (length + 1);
  let rightBorder = 1 % length;
  let leftPart = repeatString(leftChar, leftBorder);
  let middlePart = repeatString(middleChar, length-2);
  let rightPart = repeatString(rightChar, rightBorder);
  return leftPart + middlePart + rightPart;
}

const extractParameters = function (userArgs) {
  let type = userArgs[2];
  let length = +userArgs[3];
  let height = +userArgs[3];
  let breadth = +userArgs[4];
  return {'type':type,'length':length,'height':height,'breadth':breadth};
}

exports.alignLeft = alignLeft;
exports.extractParameters = extractParameters;
exports.repeatString = repeatString;
exports.alignRight = alignRight;
exports.alignCentre = alignCentre;
exports.generateLine = generateLine;

