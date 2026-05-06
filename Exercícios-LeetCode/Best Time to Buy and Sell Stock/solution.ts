function maxProfit(prices: number[]): number {
    let minorPrice = 10001
    let majorProfit = 0

    for (let i = 0; i < prices.length; i++){
        if (prices[i] < minorPrice)
            minorPrice = prices[i]

        const currentProfit = prices[i] - minorPrice
        if (currentProfit > majorProfit){
            majorProfit = currentProfit
        }
    }

    return majorProfit
};