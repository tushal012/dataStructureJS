//extend the first program to find 2nd largest and 2nd m
const prompt = require("prompt-sync")();
  let numberArray = new Array();

  for (i = 1; index < 10; i++) {
      let num = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
      numberArray.push(num);
  }
  console.log("Array is : " + numberArray);
  
  let secondLargest = numberArray.sort()[1];
  let secondSmallest = numberArray.sort()[numberArray.length - 2];
   
  console.log("With Sorting ");
  
  console.log("Second largest : " + secondLargest + "  Second Smallest : " + secondSmallest);