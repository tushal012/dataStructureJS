let die = 0;

//Initialize the map with dice values
let diceCount = new Map();

for (let i = 1; i <= 6; i)
        diceCount.set(i, 0);
var count = 0;


//function to update the occurrences of given dice value
function updateDice(num) {
    var value = diceCount.get(num);
    value++;
    diceCount.set(num, value);
    return value;
}


//Roll the dice till any one of the number is reached 10 times
while (count != 10) {
    die = Math.floor(Math.random() * 6) + 1;
    count = updateDice(die);
}

//Printing the dice count
console.log(diceCount);

var occurences = Array.from(diceCount.values());
var max = Math.max(...occurences);
var min = Math.min(...occurences);
console.log("Max occurrences = " + max);
console.log("Min occurrences = " + min);
diceCount.forEach((value, key) => {
    if (value == max) {
        console.log("Maximum number of occurrences is of : " + key + " occurring : " + value + " times");
    }
})

diceCount.forEach((value, key) => {
    if (value == min) {
        console.log("Minimum number of occurrences is : " + key + " occurring : " + value + " times");
    }
})