
function monthlySavings(array, livingCost) {

    if(Array.isArray(array) === false || typeof livingCost !== 'number'){
        return 'Invalid Input';
    }

    let totalIncome = 0;

    for (const payment of array) {
        if (payment >= 3000) {
            totalIncome = totalIncome + payment - payment * 0.2;
        }
        else {
            totalIncome = totalIncome + payment
        }
    }
    const savings = totalIncome - livingCost;
    if (savings < 0) {
        return 'Earn more'
    }
    return savings
}


const result = monthlySavings(100, [ 900 , 2700 , 3400]);
console.log(result)