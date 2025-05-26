
const findMaxProfit = (stockPrices) => {
let minPrice = stockPrices[0];
let maxProfit = 0;
for(let i = 1; i < stockPrices.length; i++){
    const currentPrice = stockPrices[i];
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);

    console.log(minPrice, maxProfit);
}
return maxProfit;

}

console.log(findMaxProfit([7, 1, 5, 3, 6, 4]))

console.log(findMaxProfit([7, 2, 6, 3, 1, 4]))

console.log(findMaxProfit([7, 2, 6, 3,  4, 1]))
