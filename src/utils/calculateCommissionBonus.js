import getSales from "../services/getSales";

const calculateCommissionBonus = async userId => {
    const sales = await getSales(userId);
    console.log(userId)
    let isFirst = true;
    const actualMonth = new Date().getMonth() + 1;
    const salesOfMonth = [];
    sales.forEach(sale => {
        const saleMonth = sale.data().date.split("-")[1];
        if (saleMonth == actualMonth) {
            salesOfMonth.push(sale.data().value);
            isFirst = false;
        }
    });
    const totalValueOfMonth = salesOfMonth.length ?
        salesOfMonth.reduce((value, nextValue) => Number(value) + Number(nextValue)) :
        0;
    const hasPercentageBonus = totalValueOfMonth > 10000;
    return [isFirst, hasPercentageBonus];
}

export default calculateCommissionBonus;