const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let sumOfPrices = 0
for (let i = 0; i < amdPrices.length; i++) {
    sumOfPrices += amdPrices[i]
}

let averagePrice = sumOfPrices / amdPrices.length

console.log(`The 7-day SMA of AMD is ${averagePrice.toFixed(2)}`)