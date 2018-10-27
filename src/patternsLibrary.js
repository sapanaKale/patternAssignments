const {repeatString, alignRight, alignCentre, generateLine} = require ('./patternsUtil.js');

const generateFilledRectangle = function (length,breadth) {
  let result = new Array(breadth).fill(repeatString('*',length)).join("\n");
  return result;
}

const generateEmptyRectangle = function (length,breadth) {
  let result = new Array(breadth).fill(repeatString('*',length));
  for (let position=1; position<breadth-1; position++) {
    result[position] = generateLine(length,'*',' ','*');
  }
  result[result.length-1] = repeatString('*',length);
  return result.join("\n");
}

const generateAlternatingRectangle = function (length,breadth) {
  let result = new Array(breadth).fill(repeatString('#',length));;
  result.forEach(function(element,index) {
    if(index % 2 == 1) {
      result[index] = repeatString('*',length);
    }
  });
  return result.join("\n");
}

const typesOfRectangle = {
  "filled": generateFilledRectangle,
  "empty": generateEmptyRectangle,
  "alternating": generateAlternatingRectangle,
}

const generateRectangle = function (parameters) {
  let typeOfRectangle = parameters['type'];
  let length = parameters['length'];
  let breadth = parameters['breadth'];
  let drawRectangle = typesOfRectangle[typeOfRectangle]; 
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

const generateTriangle = function (parameters) {
  let typeOfTriangle = parameters.type;
  let heightOfTriangle = parameters.height;
  let drawTriangle = typesOfTriangle[typeOfTriangle];
  return drawTriangle(heightOfTriangle);
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

const generateDiamond = function (parameters) {
  let heightOfDiamond = parameters.height;
  let typeOfDiamond = parameters.type;
  let drawDiamond = typesOfDiamond[typeOfDiamond]; 
  let height = heightOfDiamond;
  if (heightOfDiamond % 2 == 0) {
    height = heightOfDiamond + 1;
  }
  return drawDiamond(height);
}


exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
