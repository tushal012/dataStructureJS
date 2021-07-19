const prompt = require("prompt-sync")();

    let numberArr = [];
    let numberOne = Number(prompt("Enter first number "));
    let numberTwo = Number(prompt("Enter second number "));
    let numberThree = Number(prompt("Enter Third number "));
    
    numberArr.push(numberOne);
    numberArr.push(numberTwo);
    numberArr.push(numberThree);

    function sum(total, num) {
        return total + num;
    }

    let number = 0 - numberArr.reduce(sum, 0);

    console.log("The  number to make sum zero is " + number);