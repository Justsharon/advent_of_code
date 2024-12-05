const fs = require("fs");
fs.readFile("01.txt", "utf-8", (err, data) => {
    const arr = data.split("\n").map((row) => row.split("  "))
    console.log(arr);
    const left = arr.map(([leftArray, rightArray]) => +leftArray).sort();
    const right = arr.map(([leftArray, rightArray]) => +rightArray).sort();

    let sum = 0;
    for (let i = 0; i < left.length; i++) {
        sum += Math.abs(right[i] - left[i]);
    }
    console.log(sum);

   let totalSum = 0;
   left.forEach(val => {
    const occurreences = right.filter(num => num === val).length;
    totalSum += val * occurreences
   });

   console.log("Total Sum:", totalSum);

// sum = 0;
// for (let i = 0; i < left.length; i++) {
//     const number = left[i];
//     const leftIndex = right.indexOf(number);
//     if(leftIndex === -1) {
//         continue
//     }

//     const rightIndex = right.lastIndexOf(number);
//     sum += (rightIndex - leftIndex + 1) * number
// }
// console.log(sum)
});