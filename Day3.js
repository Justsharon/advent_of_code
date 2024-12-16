const fs = require("fs");

fs.readFile("03.txt", "utf-8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("File not found:", err.path);
    } else {
      console.error("Error reading file:", err);
    }
  }

  const pattern = /mul\(\d{1,3},\d{1,3}\)/g;
  const instructions = data.match(pattern);

  // console.log(instructions);
  let sum = instructions.reduce((acc, instructions) => {
    const [left, right] = instructions.match(/\d{1,3}/g); //match aginst only numbers
    acc += left * right;

    return acc;
  }, 0);
  console.log(sum);

  const patternb = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;
  const instructionsb = data.match(patternb);

  let enabled = true
  let sumb = instructionsb.reduce((acc, instruction) => {
    if (instruction === "do()") {
      enabled = true
    } else if (instruction === "don't()") {
      enabled = false
    } else if (enabled) {
      const numbers = instruction.match(/\d{1,3}/g);
      if(numbers) {
        const [left, right] = numbers.map(Number);
        acc += left * right
      }
    }
    return acc;
  }, 0);

  console.log(sumb)
});
