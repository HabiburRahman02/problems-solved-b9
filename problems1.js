
function calculateMoney(ticketQuantity) {

    if(Math.sign(ticketQuantity) === -1){
        return 'Please provide a positive number'
    }

    const totalBuy = ticketQuantity * 120;

    const gatemanCost = 500;
    const staffCost = 8 * 50;
    const totalCost = gatemanCost + staffCost;

    const revenue = totalBuy - totalCost;
    return revenue
}

const result = calculateMoney(-10);
console.log(result);