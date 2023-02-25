"use strict";
exports.__esModule = true;
var readline = require("readline");
function miniMaxSum(arr) {
    // Sort the array in ascending order
    arr.sort(function (a, b) { return a - b; });
    // Calculate the minimum sum by adding the first 4 elements
    var minSum = arr.slice(0, 4).reduce(function (sum, num) { return sum + num; }, 0);
    // Calculate the maximum sum by adding the last 4 elements
    var maxSum = arr.slice(1).reduce(function (sum, num) { return sum + num; }, 0);
    // Print the results
    console.log("".concat(minSum, " ").concat(maxSum));
}
// Read input from the command line
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter five space-separated integers: ", function (input) {
    // Parse the input string into an array of integers
    var arr = input.split(" ").map(function (num) { return parseInt(num, 10); });
    // Call the miniMaxSum function with the array
    miniMaxSum(arr);
    // Close the readline interface
    rl.close();
});
