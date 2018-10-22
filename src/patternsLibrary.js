const repeatString = function (string, numberOfTimes) {
  let result = "";
  for (let position=0; position<numberOfTimes; position++) {
    result += string;
  }
  return result;
}

const generateFilledRectangle = function (length,breadth) {
  let result = "";
  let delimiter = "";
  for (let position=0; position<breadth; position++) {
    result += delimiter + repeatString('*',length);
    delimiter = "\n";
  }
  return result;
}

const generateEmptyRectangle = function (length,breadth) {
  let result = "";
  if (breadth >=1) {
    result = repeatString('*',length);
  }
  let delimiter = "\n";
  for (let position=0; position<breadth-2; position++) {
    result += delimiter + "*" + repeatString(' ',length-2) + "*";
  }
  if (breadth >=2) {
    result += delimiter + repeatString('*',length);
  }
  return result;
}

const generateAlternatingRectangle = function (length,breadth) {
  let result = "";
  let delimiter = "";
  for (let position=0; position<breadth; position++) {
    result += delimiter + repeatString('#',length);
    delimiter = "\n";
    position++;
    if (position % 2 == 0 || position < breadth) {
      result += delimiter + repeatString('*',length);
    }
  }
  return result;
}

const typesOfRectangle = {
  "filled": generateFilledRectangle,
  "empty": generateEmptyRectangle,
  "alternating": generateAlternatingRectangle,
}

const invalidInputFn = function() {
    return "invalid user input provided"
}

const generateRectangle = function (type, length, breadth) {
  let drawRectangle = typesOfRectangle[type] || invalidInputFn;
  return drawRectangle(length, breadth);
}

const generateLATriangle = function (height) {
  let result = "";
  let delimiter = "";
  for (let position=0; position<height; position++) {
    result += delimiter + repeatString("*",position+1);
    delimiter = "\n";
  }
  return result;
}

const alignRight = function (length,string) {
  let  numberOfSpaces = length - string.length;
  let alignedString = repeatString(" ",numberOfSpaces) + string;
  return alignedString;
}

const generateRATriangle = function (height) {
  let result = "";
  let delimiter = "";
  for (let position=0; position<height; position++) {
   let line = repeatString("*",position+1);
   result += delimiter + alignRight(height,line);
   delimiter = "\n";
  }
  return result;
}

const typesOfTriangle = {
  "left" : generateLATriangle,
  "right" : generateRATriangle,
}

const generateTriangle = function (typeOfTriangle, heightOfTriangle) {
  let drawTriangle = typesOfTriangle[typeOfTriangle] ||invalidInputFn;
  return drawTriangle(heightOfTriangle);
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

const generateDiamond = function (typeOfdiamond, heightOfDiamond) {
  let drawDiamond = typesOfDiamond[typeOfdiamond] || invalidInputFn;
  let height = heightOfDiamond;
  if (heightOfDiamond % 2 == 0) {
    height = heightOfDiamond + 1;
  }
  return drawDiamond(height);
}


exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
