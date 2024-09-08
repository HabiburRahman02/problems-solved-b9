
function calculateMoney(ticketQuantity) {

    if (ticketQuantity < 0 || typeof ticketQuantity !== 'number') {
        return 'Invalid number'
    }

    const totalBuy = ticketQuantity * 120;

    const gatemanCost = 500;
    const staffCost = 8 * 50;
    const totalCost = gatemanCost + staffCost;

    const revenue = totalBuy - totalCost;
    return revenue
}

const result = calculateMoney(1055);
console.log(result);