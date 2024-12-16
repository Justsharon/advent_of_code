const fs = require("fs");

fs.readFile("04.txt", "utf-8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("File not found:", err.path);
    } else {
      console.error("Error reading file:", err);
    }
  }
 const grid = data.split("\n").map((row) => row.split(""))
 const rows = grid.length;
 const cols = grid[0].length;
 const word = "XMAS".split(""); //converts to "X","M","S"

 let count = 0;

 for(let i=0; i < rows; i++) {
    for (let j = 0; j< cols; j++) {
        if(word.every((char, idx) => char === grid?.[i]?.[j + idx])) count++; 
        if(word.every((char, idx) => char === grid?.[i]?.[j - idx])) count++;
        if(word.every((char, idx) => char === grid?.[i + idx]?.[j])) count++;
        if(word.every((char, idx) => char === grid?.[i - idx]?.[j])) count++;  
        if(word.every((char, idx) => char === grid?.[i + idx]?.[j + idx])) count++;
        if(word.every((char, idx) => char === grid?.[i + idx]?.[j - idx])) count++;
        if(word.every((char, idx) => char === grid?.[i - idx]?.[j + idx])) count++;
        if(word.every((char, idx) => char === grid?.[i - idx]?.[j - idx])) count++;

    }
 }

 console.log(count);

 count = 0;
 for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
        if(grid[i][j] === "A"){
            if(
                grid?.[i - 1]?.[j - 1] === "M" &&  //LEFT
                grid?.[i - 1]?.[j + 1] === "M" &&
                grid?.[i + 1]?.[j - 1] === "S" &&
                grid?.[i + 1]?.[j + 1] === "S"
            ) count++;
            if(
                grid?.[i - 1]?.[j - 1] === "M" &&
                grid?.[i - 1]?.[j + 1] === "S" &&
                grid?.[i + 1]?.[j - 1] === "M" &&
                grid?.[i + 1]?.[j + 1] === "S"
            ) count++;
            if(
                grid?.[i - 1]?.[j - 1] === "S" &&
                grid?.[i - 1]?.[j + 1] === "S" &&
                grid?.[i + 1]?.[j - 1] === "M" &&
                grid?.[i + 1]?.[j + 1] === "M"
            ) count++;
            if(
                grid?.[i - 1]?.[j - 1] === "S" &&
                grid?.[i - 1]?.[j + 1] === "M" &&
                grid?.[i + 1]?.[j - 1] === "S" &&
                grid?.[i + 1]?.[j + 1] === "M"
            ) count++;
        }
    }
 }
 console.log(count)
});




    // const directions = [
    //   [0, 1], // Right
    //   [0, -1], // Left
    //   [1, 0], // Down
    //   [-1, 0], // Up
    //   [1, 1], // Diagonal Down-Right
    //   [-1, -1], // Diagonal Up-Left
    //   [1, -1], // Diagonal Down-Left
    //   [-1, 1], // Diagonal Up-Right
    // ];


