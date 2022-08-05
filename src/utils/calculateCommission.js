const calculateCommission = (value, isFirst, hasPercentageBonus) => {
    let percentage;
    let bonus = 0;
    let percentageBonus = hasPercentageBonus ? 1 : 0;
    if (value < 800) {
        percentage = value <= 400 ? 1 : 2;
    } else {
        percentage = value <= 1200 ? 3 : 4;
        if (isFirst) {
            if (value <= 1200) bonus = 50;
            else bonus = 100;
        }
    }

    const commission = value / 100 * (percentage + percentageBonus) + bonus;
    return commission;
}

export default calculateCommission;