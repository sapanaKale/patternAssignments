const repeatString = function (character, times) {
  let result = "";
  for (let position=0; position<times; position++) {
    result = result + character;
  }
  return result;
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

const generateFilledDiamond = function (height) {
  let result = "";
  let delimiter = "";
  for (let rowLength=1; rowLength<height; rowLength+=2) {
    let line = alignCentre(repeatString('*',rowLength),height);
    result = result + delimiter + line;
    delimiter = "\n";
  }
  for (let rowLength=height; rowLength>=1; rowLength-=2) {
    let line = alignCentre(repeatString('*',rowLength),height);
    result = result + delimiter + line;
    delimiter = "\n";
  }
  return result;
}

const generateHollowDiamond = function (height) {
  let result = "";
  let delimiter = "";
  for (let rowLength=1; rowLength<height; rowLength+=2) {
    let line = alignCentre(generateLine(rowLength,'*',' ','*'),height);
    result = result + delimiter + line;
    delimiter = "\n";
  }
  for (let rowLength=height; rowLength>=1; rowLength-=2) {
    let line = alignCentre(generateLine(rowLength,'*',' ','*'),height);
    result = result + delimiter + line;
    delimiter = "\n";
  }
  return result;
}

const generateAngledDiamond = function (height) {
  let result = alignCentre(repeatString("*",1),height);
  let delimiter = "\n";
  for (let rowLength=3; rowLength<height; rowLength+=2) {
    let line = alignCentre(generateLine(rowLength,'/',' ','\\'),height);
    result = result + delimiter + line;
  }
  if (height > 1) {
    result = result + delimiter + generateLine(height,'*',' ','*');
  }
  for (let rowLength=height-2; rowLength>1; rowLength-=2) {
    let line = alignCentre(generateLine(rowLength,'\\',' ','/'),height);
    result = result + delimiter + line;
    delimiter = "\n";
  }
  if(height > 1) {
    result = result + delimiter + alignCentre(repeatString("*",1),height);
  }
  return result;
}

typesOfDiamond = {"filled" :generateFilledDiamond, 
                  "hollow" :generateHollowDiamond, 
                  "angled":generateAngledDiamond}

const main = function () {
  let typeOfDiamond = process.argv[2];
  let heightOfDiamond = +process.argv[3];
  let height = heightOfDiamond;
  if (heightOfDiamond % 2 == 0) {
    height = 1 + heightOfDiamond;
  }
  let generateDiamond = typesOfDiamond[typeOfDiamond](height);
  console.log(generateDiamond);
}

main();
