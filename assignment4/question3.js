const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let sumOfPrices = 0;
for (let i = 0; i < amdPrices.length; i++) {
    sumOfPrices += amdPrices[i];
}

let averagePrice = sumOfPrices / amdPrices.length;


let countAboveSMA = 0;
for (let i = 0; i < amdPrices.length; i++) {
    if (amdPrices[i] > averagePrice) {
        countAboveSMA++
    }
}

console.log(`Number of days AMD was above the 7-day SMA is: ${countAboveSMA}`)