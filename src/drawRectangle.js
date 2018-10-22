const repeatString = function (numberOfTimes,string) {
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
    result += delimiter + repeatString(length,"*");
    delimiter = "\n";
  }
  return result;
}

const generateEmptyRectangle = function (length,breadth) {
  let result = "";
  if (breadth >=1) {
    result = repeatString(length,"*");
  }
  let delimiter = "\n";
  for (let position=0; position<breadth-2; position++) {
    result += delimiter + "*" + repeatString(length-2," ") + "*";
  }
  if (breadth >=2) {
    result += delimiter + repeatString(length,"*");
  }
  return result;
}

const generateAlternatingRectangle = function (length,breadth) {
  let result = "";
  let delimiter = "";
  for (let position=0; position<breadth; position++) {
    result += delimiter + repeatString(length,"#");
    delimiter = "\n";
    position++;
    if (position % 2 == 0 || position < breadth) {
      result += delimiter + repeatString(length,"*");
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

const main = function () {
  let input = process.argv[2];
  let length = process.argv[3];
  let breadth = process.argv[4];
  let fnToInvoke = typesOfRectangle[input] || invalidInputFn;
  console.log(fnToInvoke(length, breadth));
}

main();

