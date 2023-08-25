// Please do not change the prewritten code

const axios = require("axios");
// import axios from "axios";
const Solution = async () => {
  const data = await axios.get("https://api.codingninjas.com/api/v3/event_tags")
  console.log(data);
  // Write your code here
};

Solution();
module.exports = Solution;
