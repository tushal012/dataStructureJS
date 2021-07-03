let birthMonthMap = new Map();


for (let index = 1; index <= 12; index++)
    birthMonthMap.set(index, 0);

for (let index = 1; index <= 50; index++){ 
    let birthMonth = Math.floor((Math.random() * 12) + 1);
    birthMonthMap.set(birthMonth, birthMonthMap.get(birthMonth) + 1);

}

console.log("Birth month  is ");
console.log(birthMonthMap);