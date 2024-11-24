// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]


let sortedPrices = amdPrices.sort((a, b) => a - b)


let lowestPrices = sortedPrices.slice(0, 3)


console.log(`The three lowest prices are ${lowestPrices.join(', ')}`)