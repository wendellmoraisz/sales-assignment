const calculateCommission = (value) => {
    let percentage;
    if (value < 800) {
        percentage = value <= 400 ? 1 : 2;
    } else {
        percentage = value <= 1200 ? 3 : 4;
    }

    const commission = value / 100 * percentage;
    return commission;
}

export default calculateCommission;