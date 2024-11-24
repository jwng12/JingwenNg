const msftData = [
    [190.15, 196.21, 191.07, 194.44],
    [193.61, 195.89, 190.12, 193.40]
];

// Write your code below

let totalClosingPrice = 0
let numberOfDays = msftData.length

for (let i = 0; i < msftData.length; i++) {
    totalClosingPrice += msftData[i][3]
}

let averageClosingPrice = totalClosingPrice / numberOfDays

console.log(`Average closing price of MSFT is ${averageClosingPrice.toFixed(2)}`)