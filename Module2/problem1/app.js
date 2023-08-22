// Note:  Please do not change the prewritten code

// import the required module here

const mathSolution = require("./math");

const Solution = () => {
  const nums = [1, 2, 3, 4, 5];
  console.log(`The sum is ${mathSolution.sum(nums)}`);
  console.log(`The mean is ${mathSolution.mean(nums)}`);
  // write your code here to Display the results of the calculations on the console.
};
Solution();
module.exports = Solution;
