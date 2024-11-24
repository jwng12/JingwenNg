const disneyData = [
    {
        open: "120.54",
        high: "122.56",
        low: "120.54",
        close: "121.09"
    },
    {
        open: "123.15",
        high: "127.76",
        low: "123.02",
        close: "124.92"
    }
];

// Write your code below

let totalClosingPrice = 0
let numberOfDays = disneyData.length

for (let i = 0; i < numberOfDays; i++) {
    totalClosingPrice += parseFloat(disneyData[i].close)
}

let averageClosingPrice = totalClosingPrice / numberOfDays

console.log(`Average closing price of Disney is ${averageClosingPrice.toFixed(2)}`)