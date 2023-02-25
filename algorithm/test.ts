import * as readline from "readline";

function miniMaxSum(arr: number[]): void {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Calculate the minimum sum by adding the first 4 elements
  const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);

  // Calculate the maximum sum by adding the last 4 elements
  const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);

  // Print the results
  console.log(`${minSum} ${maxSum}`);
}

// Read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter five space-separated integers: ", (input) => {
  // Parse the input string into an array of integers
  const arr = input.split(" ").map((num) => parseInt(num, 10));

  // Call the miniMaxSum function with the array
  miniMaxSum(arr);

  // Close the readline interface
  rl.close();
});
