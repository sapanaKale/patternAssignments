const repeatString = function (numberOfTimes,string) {
  let result = "";
  for (let position=0; position<numberOfTimes; position    ++) {
    result += string;
  }
  return result;
}

const generateLATriangle = function (height) {
  let result = "";
  let delimiter = "";
  for (let position=0; position<height; position++) {
    result += delimiter + repeatString(position+1,"*");
    delimiter = "\n";
  }
  return result;
}

const alignRight = function (length,string) {
  let  numberOfSpaces = length - string.length;
  let alignedString = repeatString(numberOfSpaces," ") + string;
  return alignedString;
}

const generateRATriangle = function (height) {
  let result = "";
  let delimiter = "";
  for (let position=0; position<height; position++) {
   let line = repeatString(position+1,"*");
   result += delimiter + alignRight(height,line);
   delimiter = "\n";
  }
  return result;
}

typesOfTriangle = {
  "left" : generateLATriangle,
  "right" : generateRATriangle,
}

const main = function () {
  let typeOfTriangle = process.argv[2];
  let heightOfTriangle = process.argv[3];
  let generateTriangle = typesOfTriangle[typeOfTriangle];
  console.log(generateTriangle(heightOfTriangle));
}

main();
