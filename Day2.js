const fs = require("fs");

const sequenceCheck = (row) => {
  const isRowIncreasing = row[1] > row[0];
  const isRowDecreasing = row[1] < row[0];

  for (let i = 0; i < row.length; i++) {
    const difference = row[i] - row[i - 1];

    if (Math.abs(difference) < 1 || Math.abs(difference) > 3) return false;

    if (isRowIncreasing && difference <= 0) return false; // increase , no or decreasing change
    if (isRowDecreasing && difference >= 0) return false; //decrease, no or increasing change
  }
  return true;
};

fs.readFile("02.txt", "utf-8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("File not found:", err.path);
    } else {
      console.error("Error reading file:", err);
    }
  }
  //split by new line to get each of the row
  //split by space to get each individual number
  //ap by Number to get number
  const arr = data.split("\n").map((row) => row.split(" ").map(Number));

  let safe = 0;
  arr.forEach((row) => {
    if (sequenceCheck(row)) safe++;
  });

  console.log("safe:", safe);

  safe = 0;
  arr.forEach((row) => {
    if (sequenceCheck(row)) {
      safe++;
      return;
    } else {
      for (let i = 0; i < row.length; i++) {
        const m_array = row.slice(0, i).concat(row.slice(i + 1)); // this removes one el from the array

        if (sequenceCheck(m_array)) {
          safe++;
          return;
        }
      }
    }
  });
  console.log(safe);
});
