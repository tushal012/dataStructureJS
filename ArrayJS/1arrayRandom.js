const prompt = require("prompt-sync")();

let Array = [];

//generates 10 random 3 digit number
    for (i = 1; i < 10; i++) {
        let num = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
        Array.push(num);
    }
    console.log("Array is " + Array);

    //store random number into array
    let firstMax = Array[0];
    let secondMax = Array[0];
    let firstMin = Array[0];
    let secondMin = Array[0];
    
    for (let number of Array) {
        if (number > firstMax) {
            secondMax = firstMax;
            firstMax = number;
        }
        else if (number > secondMax) {
            secondMax = number;
        }
        if (number < firstMin) {
            secondMin = firstMin;
            firstMin = number;
        }
        else if (number < secondMin) {
            secondMin = number;
        }
    }
    console.log("Second Maximum : " + secondMax + "  Second Minimum : " + secondMin);